import React, { useState } from "react";
import "./Friend.css";

const Friend = ({ friend, handleDelete, handleStar, color }) => {
  return (
    <div className="friend">
      <h4>{friend}</h4>
      <div>
        <button onClick={() => handleStar(friend)}>
          <i class="fas fa-star"></i>
        </button>
        <button onClick={() => handleDelete(friend)}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Friend;
