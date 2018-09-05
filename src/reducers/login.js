import * as LoginActionTypes from '../actionTypes/login';

const initialState = {
  email: "",
  loginStatus: false,
}

export const Login = (state = initialState, action) => {
  switch(action.type) {
    case LoginActionTypes.UPDATE_LOGIN_STATUS: 
      console.log("we've arrived", action);
      return {
        email: action.email,
        loginStatus: action.email ? true : false,
      }
    default:
      return state
  }
}

