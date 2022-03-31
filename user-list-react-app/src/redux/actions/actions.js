import {
  ON_MOUSE_HOVER,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  DELETE_USER,
} from "./actionTypes";
import axios from "axios";

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
    payload: userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const fetchUsersData = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        const userData = response.data.data;
        dispatch(fetchUserSuccess(userData));
      });
  };
};
