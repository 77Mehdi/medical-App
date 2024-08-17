import axios from 'axios'

const uplod_preset = import.meta.env.VITE_UPLOAD_PRESET
const  cloud_name = import.meta.env.VITE_CLOUD_NAME




const uolodImgeToCloudinaray = async (file) => {
   

    const uploadData = new FormData()

    uploadData.append("file", file);
    uploadData.append("upload_preset",uplod_preset)
   
   

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: uploadData,
      });


    //   if (!res.ok) {
    //     const errorData = await res.json();
    //     console.error('Upload error details:', errorData);
    //     throw new Error(`Error uploading image: ${errorData.error.message}`);
    // }


    const data = await res.json();

    return data
}



export default uolodImgeToCloudinaray


