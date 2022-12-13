import * as api from "../../api";
import React from "react";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: "AUTH", data });
    alert("login success");
    navigate("/");
  } catch (error) {
    console.log(error);
    alert("username or password fail");
  }
};

export const registerForm = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: "AUTH", data });
    alert("Register success");
    navigate("/SignIn");
  } catch (error) {
    console.log(error);
    alert("Username error");
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    dispatch({ type: "AUTH", data });
  } catch (error) {}
};
