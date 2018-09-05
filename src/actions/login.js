import * as LoginActionTypes from '../actionTypes/login';

export const updateLoginStatus = email => {
  return {
    type: LoginActionTypes.UPDATE_LOGIN_STATUS,
    email
  }
}