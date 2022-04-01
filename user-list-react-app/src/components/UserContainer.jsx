import React, { useEffect, useState } from "react";
import HoverCard from "./HoverCard/HoverCard";
import "./UserContainer.css";
import UserList from "./User/UserList/UserList";
import { useDispatch } from "react-redux";
import { fetchStoredData, fetchUsersData } from "../redux/actions/actions";
import Pagination from "../components/Pagination/Pagination";

function UserContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const getPage_Items = (page) => {
    let storageList = localStorage.getItem(`Page${page}-Data`);
    if (storageList) {
      return JSON.parse(localStorage.getItem(`Page${page}-Data`));
    } else {
      return [];
    }
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const storedData = getPage_Items(page);
    if (storedData.length === 0) {
      dispatch(fetchUsersData(page));
    } else {
      dispatch(fetchStoredData(storedData));
    }
  }, [dispatch, page]);

  return (
    <div className="user-container">
      <UserList />
      <Pagination changePage={changePage} />
      <HoverCard />
    </div>
  );
}

export default UserContainer;
