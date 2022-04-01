import {
  ON_MOUSE_HOVER,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  DELETE_USER,
  FETCH_STORED_DATA,
} from "./actionTypes";

export const onMouseHover = (id) => {
  return {
    type: ON_MOUSE_HOVER,
    payload: id,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (userData) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: userData
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

// Creating action to fetch data from Local Storage

export const fetchStoredData = (storedData) => {
  return {
    type: FETCH_STORED_DATA,
    payload: storedData,
  };
};

// Used fetch api instead of axios package to fetch data from api

export const fetchUsersData = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(`${process.env.REACT_APP_API}/users?page=${pageNumber}`)
      .then((response) => response.json())
      .then((userData) => {
        dispatch(fetchUserSuccess(userData.data));

        // Store the fetched data in local storage to reduce the fetch operations when the data is stored in Local Storage

        localStorage.setItem(
          `Page${pageNumber}-Data`,
          JSON.stringify(userData.data)
        );
      });
  };
};
