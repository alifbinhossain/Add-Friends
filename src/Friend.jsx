import React, { useState } from "react";
import "./Friend.css";

const Friend = ({ friend, handleDelete, handleStar }) => {
  const { name, priority } = friend;
  return (
    <div className="friend">
      <h4>{name}</h4>
      <div>
        <button onClick={() => handleStar(friend)}>
          <i
            class={priority === "top" ? "fas fa-star color" : "fas fa-star"}
          ></i>
        </button>
        <button onClick={() => handleDelete(friend)}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Friend;
