import React, { useState } from 'react';
import axios from 'axios';
import Toast from "./Toast";
import Rating from "./Rating";
import "../styling/PostForm.css";

const PostForm = () => {

    const [rating, setRating] = useState(0);
    const [data, setData] = useState({
        name: '',
        description: '',
        stars: 0
    });

    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        data.stars = rating;
        console.log(data);

        // Send the uploaded content to the backend
        axios.post('http://localhost:3001/api/upload', data)
        .then(response => {
            setError('');
            setShowToast(false);
            console.log('Upload successful:', response.data);
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
            setError("Please enter all fields");
            setShowToast(true);
        });
    };


return (
        <div className="container">
        {showToast && (
        <div className="toast-container">
            <Toast message={`Error: ${error}`} handleClose={() => setShowToast(false)} />
        </div>
        )}
        <h1>Upload Review</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Name"
        />
        <Rating rating={rating} setRating={setRating} />
        <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Enter your description here"
        />
        <button type="submit">Submit</button>
        </form>
    </div>
    );
};

export default PostForm;
