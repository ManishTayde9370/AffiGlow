import IconButton from '@mui/material/IconButton';
import {DataGrid} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { serverEndpoint } from '../../config';
import Spinner from '../../components/Spinner';

const USER_ROLES = ['viewer','developer'];

function ManageUsers(){
    const [errors, setErrors]=useState({});
    const [usersData, setUsersData] = useState([]);
    const [formData, setFormData] = useState({
        email:'',
        name:'',
        role:''
    });

    const [showmodel,setShowmodel] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formLoading, setFormLoading]=useState(false);

    const handlemodelShow=(isEdit, data = {})=>{
        if(isEdit){
            setFormData({
                id:data._id,
                email:data.email,
                name:data.name,
                role:data.role
            });
        }else{
            setFormData({
                email:'',
                role:'',
                name:'',
            });
        }
        setIsEdit(isEdit);
        setShowmodel(true);
    };

    const handlemodelClose=()=>{
        setShowmodel(false);
    };

    const [showDeletemodel, setShowDeletemodel] = useState(false);

    const handleDeletemodelShow = (userId) =>{
        setFormData({
            id:userId
        });
        setShowDeletemodel(true);
    };

    const handleDeletemodelClose=()=>{
        setShowDeletemodel(false);
    };

    const handleDeleteSubmit=async()=>{
        try{
            setFormLoading(true);
            await axios.delete(`${serverEndpoint}/users/${formData.id}`,
                {withCredentials: true}
            );
            setFormData({
                email:'',
                role:'',
                name:''
            });
            fetchUsers();
        }catch(error){
            setErrors({message:'Something went wrong, please try again'});
        }finally{
            handleDeletemodelClose();
            setFormLoading(false);
        }
    };

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () =>{
        let newErrors={};
        let isValid = true;
        if(formData.email.length === 0){
            newErrors.email = "Email is mandatory";
            isValid=false;
        }

        if(formData.role.length === 0){
            newErrors.role = "Role is mandatory";
            isValid=false;
        }

        if(formData.name.length === 0){
            newErrors.name = "Name is mandatory";
            isValid=false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(validate()){
            setFormLoading(true);
            const body={
                email:formData.email,
                name:formData.name,
                role:formData.role
            };

            const configuration = {
                withCredentials:true
            };
            try{
                if(isEdit){
                    await axios.put(`${serverEndpoint}/users/${formData.id}`,body,configuration);
                }else{
                    await axios.post(`${serverEndpoint}/users`,body,configuration);
                }
                setFormData({
                    email: "",
                    name: "",
                    role: ""
                });
                fetchUsers();
            }catch(error){
                setErrors({message:'Something went wrong, please try again'});
            }finally{
                handlemodelClose();
                setFormLoading(false);
            }
        }
    };

    const fetchUsers = async()=>{
        try{
            setLoading(true);
            const response = await axios.get(`${serverEndpoint}/users`,{withCredentials:true});
            setUsersData(response.data);
        }catch(error){
            console.log(error);
            setErrors({message: 'Unable to fetch users at the moment, please try again'});
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchUsers();
    },[]);

    const columns = [
        {field:'email', headerName:'Email', flex:2},
        {field:'name', headerName:'Name', flex:2},
        {field:'role', headerName:'Role', flex:2},
        {field:'action', headerName:'Action', flex:1, renderCell:(params)=>(
            <>
                <IconButton>
                    <EditIcon onClick={()=>handlemodelShow(true, params.row)}/>
                </IconButton>
                <IconButton>
                    <DeleteIcon onClick={()=>handleDeletemodelShow(params.row._id)}/>
                </IconButton>
            </>
        )}
    ];

    return(
        <div className='container py-4'>
            <div className='d-flex justify-content-between mb-3'>
                <h2>Manage Users</h2>
                <button className='btn btn-primary btn-sm' onClick={()=>handlemodelShow(false)}>
                    Add
                </button>
            </div>
            {errors.message && (
                <div className='alert alert-danger' role='alert'>
                    {errors.message}
                </div>
            )}

            <div style={{height:500, width:'100%'}}>
                <DataGrid
  getRowId={(row) => row._id}
  rows={usersData} // ✅ correct prop name
  columns={columns} // ✅ correct variable name
  initialState={{
    pagination: {
      paginationModel: { pageSize: 20, page: 0 },
    },
  }}
  pageSizeOptions={[20, 50, 100]}
  disableRowSelectionOnClick
  sx={{
    fontFamily: 'inherit',
  }}
  loading={loading}
/>

            </div>

            <Modal show={showmodel} onHide={handlemodelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit?(<>Edit User</>):(<>Add User</>)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input 
                                type='text'
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <div className='invalid-feedback'>
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input 
                                type='text'
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <div className='invalid-feedback'>
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='role' className='form-label'>Role</label>
                            <select name="role" value={formData.role} onChange={handleChange} className={`form-control ${errors.role ? 'is-invalid':''}`}>
                                <option key="select" value="">
                                    Select
                                </option>
                                {USER_ROLES.map((role)=>(
                                    <option key={role} value={role}>
                                        {role.charAt(0).toUpperCase()+role.slice(1)}
                                    </option>
                                ))}
                                </select>
                                {errors.role && (
                                    <div className='invalid-feedback'>
                                        {errors.role}
                                    </div>
                                )}
                        </div>
                        <div className='d-grid'>
                            {formLoading?(
                                <div className='d-flex justify-content-center align-items-center' style={{height: '40px'}}>
                                    <Spinner />
                                </div>
                            ):(
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            )}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={showDeletemodel} onHide={()=>setShowDeletemodel()}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-secondary' onClick={()=>setShowDeletemodel()}>
                            Cancel
                        </button>
                        {formLoading ? (
                            <div className='d-flex justify-content-center align-items-center' style={{height: '40px'}}>
                                <Spinner />
                            </div>
                        ):(
                            <button className='btn btn-danger' onClick={handleDeleteSubmit}>
                                Delete
                            </button>
                        )}
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ManageUsers;