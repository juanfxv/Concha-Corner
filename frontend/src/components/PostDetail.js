import React, { useState } from 'react'
import Rating from "./Rating"
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import "../styling/PostDetail.css";

const PostDetail = ({ props: item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const [rating, setRating] = useState(editedItem.stars);

  const handleSave = async () => {
    try {
      editedItem.stars = rating;
      const { _id, dateUploaded, ...restOfItem } = editedItem;
      await axios.put(`http://localhost:3001/api/upload/${_id}`, restOfItem);

      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Failed to save item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleCancel = (e) => {
    setEditedItem(item);
    setRating(item.stars);
    setIsEditing(false);
  }

  return (
    <div key={item._id} className="item-container">
      <div className="edit-icon" onClick={() => setIsEditing(true)}>
        <FaEdit />
      </div>
      <h2>{item.name}</h2>
      <p className="description">{item.description}</p>

      <div className="rating-container">
        <label className="rating-label">Rating:</label>
        <Rating rating={item.stars} />
      </div>

      <p className="date">
        Date Published: {new Date(item.dateUploaded).toLocaleString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </p>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Item</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedItem.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={editedItem.description}
                onChange={handleChange}
              />
            </label>
            <div className="rating-container">
              <label className="rating-label">Edit Rating:</label>
              <Rating rating={rating} setRating={setRating} />
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
