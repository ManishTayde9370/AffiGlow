import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AssessmentIcon from '@mui/icons-material/Assessment';
import { serverEndpoint } from "../../config";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { userPermissions } from "../../rbac/permissions";
import { useNavigate } from "react-router-dom";


function LinkDashboard() {
  const [errors, setErrors] = useState({});
  const [linksData, setLinksData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    campaignTitle: "",
    originalUrl: "",
    category: "",
  });
  const [showModel, setShowModel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const permission = userPermissions();

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [sortModal, setSortModal] = useState([
    { field: 'createdAt', sort: "desc" }]);


  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const debounceTimeout = useRef();

  const fetchLinks = async () => {
    try {
      setLoading(true);

      const sortField = sortModal[0]?.field || "createdAt";
      const sortOrder = sortModal[0]?.sort || "desc";
      const params = {
        currentPage: currentPage,
        pageSize: pageSize,
        searchTerm: searchTerm,
        sortField: sortField,
        sortOrder: sortOrder
      };
      const response = await axios.get(`${serverEndpoint}/links`, {
        params: params,
        withCredentials: true,
      });
      setLinksData(response.data.data.links);
      setTotalCount(response.data.data.total);
    } catch (error) {
      setErrors({
        message: "Unable to fetch links at the moment, please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, [currentPage, pageSize, sortModal, searchTerm]);

  // Debounce search input
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setSearchTerm(searchInput);
      setCurrentPage(0);
    }, 500);
    return () => clearTimeout(debounceTimeout.current);
  }, [searchInput]);

  const handlemodlShow = (editMode = false, data = {}) => {
    if (editMode) {
      setFormData({
        id: data._id,
        campaignTitle: data.campaignTitle,
        originalUrl: data.originalUrl,
        category: data.category,
        thumbnail: data.thumbnail || '',
      });
      setPreviewUrl(data.thumbnail || '');
      setThumbnailFile(null);
    } else {
      setFormData({
        id: '',
        campaignTitle: '',
        originalUrl: '',
        category: '',
        thumbnail: '',
      });
      setPreviewUrl('');
      setThumbnailFile(null);
    }
    setIsEdit(editMode);
    setShowModel(true);
  };

  const handlemodelClose = () => {
    setShowModel(false);
    setErrors({});
  };

  const handleDeletemodelShow = (id) => {
    setFormData({ ...formData, id });
    setShowDeletemodel(true);
  };

  const handleDeletemodelClose = () => {
    setShowDeletemodel(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(`${serverEndpoint}/links/${formData.id}`, {
        withCredentials: true,
      });
      fetchLinks();
    } catch (error) {
      setErrors({ message: "Something went wrong, please try again" });
    } finally {
      handleDeletemodelClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.campaignTitle.trim()) {
      newErrors.campaignTitle = "Campaign Title is mandatory";
      isValid = false;
    }
    if (!formData.originalUrl.trim()) {
      newErrors.originalUrl = "Original URL is mandatory";
      isValid = false;
    }
    if (!formData.category.trim()) {
      newErrors.category = "Category is mandatory";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    let thumbnailUrl = formData.thumbnail || '';
    if (thumbnailFile) {
      thumbnailUrl = await uploadToCloudinary(thumbnailFile);
    }

    const body = {
      campaign_title: formData.campaignTitle,
      original_url: formData.originalUrl,
      category: formData.category,
      thumbnail: thumbnailUrl,
    };

    try {
      if (isEdit && formData.id) {
        await axios.put(`${serverEndpoint}/links/${formData.id}`, body, {
          withCredentials: true,
        });
      } else {
        await axios.post(`${serverEndpoint}/links`, body, {
          withCredentials: true,
        });
      }
      fetchLinks();
    } catch (error) {
      if (error.response?.data?.code === "INSUFFICIENT_FUNDS") {
        setErrors({
          message: `You do not have enough credits to perform this action.
                        Add funds to your account using Manage Payment option`,
        });
      } else {
        setErrors({ message: "Something went wrong, please try again" });
      }
    } finally {
      handlemodelClose();
    }
  };

  const uploadToCloudinary = async (file) => {
    const { data } = await axios.post(
      `${serverEndpoint}/links/generate-upload-signature`, {},
      { withCredentials: true });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", data.apiKey);
    formData.append("timestamp", data.timestamp);
    formData.append("signature", data.signature);
    formData.append("folder", "AffiGlow");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${data.cloudName}/image/upload`,
      formData
    );

    return response.data.secure_url;
  };

  const columns = [
    {
      field: 'thumbnail', headerName: 'Thumbnail', flex: 2, sortable: false,
      renderCell: (params) => (
        params.row.thumbnail ? (
          <img src={params.row.thumbnail} alt="Thumbnail" style={{  maxHeight: '40px',}}/>
        ) : (
          <span style={{color: '#888'}}>No Image</span>
        )
      ) 
  },
    { field: "campaignTitle", headerName: "Campaign", flex: 2 },
    {
      field: "originalUrl",
      headerName: "URL",
      flex: 3,
      renderCell: (params) => (
        <a
          href={`${serverEndpoint}/links/r/${params.row._id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {params.row.originalUrl}
        </a>
      ),
    },
    { field: "category", headerName: "Category", flex: 2 },
    { field: "clickCount", headerName: "Clicks", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <>
          {permission.canEditLink && (
            <IconButton onClick={() => handlemodlShow(true, params.row)}>
              <EditIcon />
            </IconButton>
          )}
          {permission.canDeleteLink && (
            <IconButton onClick={() => handleDeletemodelShow(params.row._id)}>
              <DeleteIcon />
            </IconButton>
          )}
          {permission.canViewLink && (
            <IconButton onClick={() => navigate(`/analytics/${params.row._id}`)}>
              <AssessmentIcon />
            </IconButton>
          )}
        </>
      ),
    },
    {
      field: 'share',
      headerName: 'share Affiliate Link',
      sortable: false,
      flex: 1.5,
      renderCell: (params) => {
        const shareURL = `${serverEndpoint}/links/r/${params.row._id}`;
        return (
          <button className="btn btn-outline-primary btn-sm"
            onClick={(e) => {
              navigator.clipboard.writeText(shareURL);
            }}
          >
            Copy
          </button>
        );
      }
    }
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Manage your Affiliate Links</h2>
        {permission.canCreateLink && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handlemodlShow(false)}
          >
            Add
          </button>
        )}
      </div>


      {errors.message && (
        <div className="alert alert-danger">{errors.message}</div>
      )}
      <div className="mb-2">
        <input type="text"
          className="form-control"
          placeholder="Enter Campaign title, Orginial URL, or Category"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={linksData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: pageSize, page: currentPage },
            },
          }}
          paginationMode="server"
          pageSizeOptions={[10, 20, 50, 100]}
          onPaginationModelChange={({ page, pageSize }) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          }}
          rowCount={totalCount}
          sortingMode="server"
          sortModel={sortModal}
          onSortModelChange={(model) => {
            setSortModal(model);
            setCurrentPage(0);
          }}
          disableRowSelectionOnClick
          showToolbar
          sx={{ fontFamily: "inherit" }}
        />
      </div>

      {/* Add/Edit Modal */}
      <Modal show={showModel} onHide={handlemodelClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Link" : "Add Link"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {[
              "campaignTitle",
              "originalUrl",
              "category"
            ].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {field === "campaignTitle"
                    ? "Campaign Title"
                    : field === "originalUrl"
                      ? "Original URL"
                      : "Category"}
                </label>
                <input
                  type="text"
                  name={field}
                  className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
                {errors[field] && (
                  <div className="invalid-feedback">{errors[field]}</div>
                )}
              </div>
            ))}
            <div className="mb-3">
  <label htmlFor="thumbnailFile" className="form-control">
    Thumbnail
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setThumbnailFile(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    }}
    className="form-control"
  />
  {previewUrl && (
    <div className="mt-2">
      <img
        src={previewUrl}
        width="150"
        alt="thumbnail-preview"
        className="img-responsive border rounded-2"
      />
    </div>
  )}
</div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleDeletemodelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this link?</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleDeletemodelClose}
          >
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleDeleteSubmit}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LinkDashboard;