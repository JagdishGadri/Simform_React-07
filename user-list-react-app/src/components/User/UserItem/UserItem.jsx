import React, { useState } from "react";
import "./UserItem.css";
import { Trash2, Lock } from "react-feather";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  fetchUsersData,
  onMouseHover,
} from "../../../redux/actions/actions";

function UserItem(props) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  function activeChange(e) {
    if (e.target.value === "Active") {
      setIsActive(true);
    }
  }

  return (
    <div className="user-item">
      <div
        className="user-data"
        onMouseEnter={() => dispatch(onMouseHover(props.userId))}
      >
        <img
          className="user-img"
          src={props.userPicture}
          alt="Profile Picture"
        />
        <div className="user-name-email">
          <div className="user-name">
            <p>{props.userFirstName + " " + props.userLastName}</p>
          </div>
          <div className="user-email">
            <h6>{props.userEmail}</h6>
          </div>
        </div>
      </div>
      {props.userId === 1 || isActive ? (
        <p style={{ color: "green" }}> Active </p>
      ) : (
        <select className="status-dropdown" onClick={activeChange}>
          <option value="Inactive">Inactive</option>
          <option value="Active">Active</option>
        </select>
      )}
      {props.userId === 1 ? (
        <p> Owner </p>
      ) : (
        <select className="access-dropdown">
          <option value="Manager">Manager</option>
          <option value="Read">Read</option>
        </select>
      )}
      {props.userId === 1 ? (
        <Lock />
      ) : (
        <div className="delete-button">
          <Trash2 onClick={() => dispatch(deleteUser(props.userId))} />
        </div>
      )}
    </div>
  );
}

export default UserItem;


