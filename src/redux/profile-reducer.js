import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PTOFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES'

let initialState = {
  posts: [
    { id: 1, message: 'Hello', likes: 20 },
    { id: 2, message: 'Where are you?', likes: 15 },
    { id: 3, message: 'Baby', likes: 7 }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: action.postText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case SET_USER_PTOFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId)
      }
    case SAVE_PHOTO_SUCCES:
      return {
        ...state,
        profile:{...state.profile, photos: action.photos}
      }

    default:
      return state;
  }
}

export const addPostCreator = (postText) => ({ type: ADD_POST, postText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSucces = (photos) => ({type:SAVE_PHOTO_SUCCES, photos})

const setUserProfile = (profile) => ({ type: SET_USER_PTOFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSucces(response.data.data.photos))
    debugger;
  }
}


export default profileReducer;