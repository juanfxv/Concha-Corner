import React from 'react'
import Rating from "./Rating"
import "../styling/PostDetail.css";

const PostDetail = ({ props: item }) => {
  return (
    <div key={item._id} className="item-container">
      <h2>{item.name}</h2>
      <p className="description">Description: {item.description}</p>
      <Rating rating={item.stars} />
      <p className="date">Date Published: {new Date(item.dateUploaded).toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric"
      })}</p>
    </div>

  )
}

export default PostDetail