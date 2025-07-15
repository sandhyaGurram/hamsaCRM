import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');

    // Handle text input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image || !formData.title || !formData.description) {
            setMessage('All fields are required');
            return;
        }

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('image', image);

        try {
            const response = await axios.post('https://hamsa-backend-4rpv.onrender.com/upload-image', data);
            setMessage('Image uploaded successfully');
            console.log(response.data);
        } catch (err) {
            setMessage('Error uploading image');
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                {preview && (
                    <div style={{ marginTop: '10px' }}>
                        <img
                            src={preview}
                            alt="Preview"
                            style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                        />
                    </div>
                )}

                <button type="submit" style={{ marginTop: '15px' }}>Upload</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default ImageUpload;
