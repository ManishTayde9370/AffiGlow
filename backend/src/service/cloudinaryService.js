const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const generateUploadSignature = ()=>{
    const timestamp = Math.floor(Date.now() / 1000);// Current time in seconds

    const signature=cloudinary.utils.api_sign_request(
        {timestamp,folder: 'AffiGlow'},
        process.env.CLOUDINARY_API_SECRET
    );

    return {signature, timestamp};
};

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'AffiGlow',
//     allowed_formats: ['jpg', 'jpeg', 'png', 'webp','pdf','docx','doc','pptx','ppt','xls','xlsx','csv'],
//   },
// });

module.exports = { generateUploadSignature};
