import { authAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_ERRORS = 'samurai-network/auth/SET_ERRORS';
const SET_CAPTCHA = 'samurai-network/auth/SET_CAPTCHA'


let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  errors: '',
  captcha: ''
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha
      }
    default:
      return state;
  }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
const setErrors = (errors) => ({ type: SET_ERRORS, errors })
const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }}

export const login = (values) => async (dispatch) => {
   let response = await authAPI.login(values)
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
    dispatch(setErrors(response.data.messages[0]))
  }

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptcha = () => async (dispatch) => {
  let response = await authAPI.captchaUrl()
    dispatch(setCaptcha(response.data.url))
}


export default authReducer;