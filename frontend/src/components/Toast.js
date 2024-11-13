import React, { useEffect } from 'react';
import "../styling/Toast.css"; // Add your styles

const Toast = ({ message, handleClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [duration, handleClose]);

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;
