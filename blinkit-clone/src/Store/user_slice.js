import { createSlice } from "@reduxjs/toolkit";
import api from "../Http/index";

const user_slice = createSlice({
  name: "user",
  initialState: { user: {}, isAuthenticated: false, all_users: [] },
  reducers: {
    login_success: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    register_success: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    logout_success: (state) => {
      return {
        isAuthenticated: false,
        user: null,
      };
    },
    fetch_users: (state, action) => {
      return {
        ...state,
        all_users: action.payload,
      };
    },
  },
});

export const login = (number, password) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/v1/login`, { number, password });

    dispatch(login_success(data.new_user));
    saveToken(data.token, data.new_user);
  } catch (error) {
    console.log(error);
  }
};

export const register = (name, number, password) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/v1/register`, {
      name,
      number,
      password,
    });
    dispatch(register_success(data?.new_user));
    saveToken(data?.token, data?.new_user);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.get(`/api/v1/logout`);
    dispatch(logout_success());
  } catch (error) {}
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.get("/api/v1/fetchUsers");
    dispatch(fetch_users(data.all_users));
  } catch (error) {
    console.log(error);
  }
};

export const saveToken = (token, user_data) => {
  localStorage.setItem("user_token", token);
  localStorage.setItem("user_info", JSON.stringify(user_data));
};

export const { login_success, logout_success, register_success, fetch_users } =
  user_slice.actions;
export default user_slice.reducer;
