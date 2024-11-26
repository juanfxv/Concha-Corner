import React, { useState, useEffect, useRef } from 'react';
import Rating from "./Rating";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../styling/PostDetail.css";

const PostDetail = ({ props: item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const [rating, setRating] = useState(editedItem.stars);
  const descriptionRef = useRef(null);

  // Handle save for editing
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

  // Adjust textarea height dynamically
  const adjustTextareaHeight = () => {
    if (descriptionRef.current) {
      descriptionRef.current.style.height = "auto"; // Reset height
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Adjust to content
    }
  };


  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
    if (name === "description") adjustTextareaHeight(); // Adjust height when description changes
  };

  // Handle cancel editing
  const handleCancel = () => {
    setEditedItem(item);
    setRating(item.stars);
    setIsEditing(false);
  };

  // Handle delete review
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/upload/${item._id}`);
      window.location.reload();  // Reload to refresh the list after deleting
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  // Adjust height when the component mounts or `isEditing` becomes true
  useEffect(() => {
    if (isEditing) adjustTextareaHeight();
  }, [isEditing]);

  return (
    <div key={item._id} className="item-container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="icons" onClick={() => setIsEditing(true)}>
          <FaEdit />
        </div>
        <div className="icons" onClick={handleDelete}>
          <FaTrashAlt />
        </div>
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
                ref={descriptionRef}
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
