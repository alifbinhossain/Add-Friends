import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Friend from "./Friend";
import Swal from "sweetalert2";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [displayFriends, setDisplayFriends] = useState(friends);
  // const [pageCount, setPageCount] = useState(0);
  // const [currentPage, setCurrentPage] = useState(0);
  // const size = 4;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //button add friends functionality
  const onSubmit = (data) => {
    if (data.name) {
      const newFriend = data.name;
      const allFriends = [...friends, newFriend];
      setFriends(allFriends);
      setDisplayFriends(allFriends);
      Swal.fire({
        icon: "success",
        title:
          "<h3 style='color:#e7e7e7'>" +
          "Succesfully added a new friend.. 😁" +
          "</h3>",
        showConfirmButton: false,
        timer: 1500,
        padding: "1rem 2rem",
        background: "#3c4a49",
      });
    }
    reset();
  };

  //button delete functionality
  const handleDelete = (friend) => {
    Swal.fire({
      title: "Do you want to remove this friend?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3c4a49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingFriends = friends.filter((item) => item !== friend);
        setFriends(remainingFriends);
        setDisplayFriends(remainingFriends);
        Swal.fire({
          icon: "success",
          title:
            "<h3 style='color:#e7e7e7'>" + "Succesfully removed..😁" + "</h3>",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem",
          background: "#3c4a49",
        });
      }
    });
  };
  //button sorting functionality
  const handleStar = (friend) => {
    const remainingsFriends = friends.filter((item) => item !== friend);
    const newSortedFriends = [friend, ...remainingsFriends];
    setFriends(newSortedFriends);
    setDisplayFriends(newSortedFriends);
  };
  // const handlePagination = (number) => {
  //   friends.length = 0;
  //   setCurrentPage(number);
  // };

  // search input functionality
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const results = friends.filter((friend) =>
      friend.toLowerCase().includes(searchText.toLowerCase())
    );

    setFriends(results);
    setDisplayFriends(results);
  };
  return (
    <div className="friends">
      <h1>Add New Friends</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="enter your friend name" {...register("name")} />
        <input className="btn-add" type="submit" value="Add" />
      </form>

      <input
        type="text"
        placeholder="search your friend name"
        className="input-search"
        onChange={handleSearch}
      />

      <ul>
        {displayFriends.map((friend) => (
          <Friend
            handleStar={handleStar}
            handleDelete={handleDelete}
            friend={friend}
          ></Friend>
        ))}
      </ul>

      {/* <div className="pagination">
        {[...Array(pageCount).keys()].map((n) => (
          <button
            className={n === currentPage ? "selected" : ""}
            onClick={() => handlePagination(n)}
          >
            {n + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Friends;
