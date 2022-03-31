import React, { useEffect, useState } from "react";
import HoverCard from "./HoverCard/HoverCard";
import "./UserContainer.css";
import UserList from "./User/UserList/UserList";
import { useDispatch } from "react-redux";
import { fetchUsersData } from "../redux/actions/actions";
import Pagination from "../components/Pagination/Pagination";

function UserContainer() {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const changePage = (page) => {
    setPageNumber(page);
    dispatch(fetchUsersData(page));
  };

  useEffect(() => {
    dispatch(fetchUsersData(pageNumber));
  }, []);

  return (
    <div className="user-container">
      <UserList />
      <Pagination changePage={changePage} />
      <HoverCard />
    </div>
  );
}

export default UserContainer;
