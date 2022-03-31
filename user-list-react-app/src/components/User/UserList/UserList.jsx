import React from "react";
import UserItem from "../UserItem/UserItem";
import { connect, useSelector } from "react-redux";
import "./UserList.css";

function UserList() {
  const User = useSelector((state) => state.fetchedData);

  return (
    <div className="user-list">
      <div className="list-title">
        <strong>Name</strong>
        <strong>Status</strong>
        <strong>Access</strong>
      </div>

      <div className="list-data">
        {User.map((user) => (
          <UserItem
            userFirstName={user.first_name}
            userLastName={user.last_name}
            userPicture={user.avatar}
            userEmail={user.email}
            key={user.id}
            userId={user.id}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.fetchedData,
    deletedId: state.deletedId,
  };
};

export default connect(mapStateToProps)(UserList);
