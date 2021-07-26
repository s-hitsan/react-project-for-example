import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {

      posts: [
        { id: 1, message: 'Hello', likes: 20 },
        { id: 2, message: 'Where are you?', likes: 15 },
        { id: 3, message: 'Baby', likes: 7 }
      ],
      newPostText: ''
    },

    dialogsPage: {

      dialogs: [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Borya' },
        { id: 4, name: 'Egor' },
        { id: 5, name: 'Zay' },
        { id: 6, name: 'Kira' }
      ],

      messages: [
        { id: 1, message: 'Ne' },
        { id: 2, message: 'Nu' },
        { id: 3, message: 'Da' },
        { id: 4, message: 'Ladno' },
      ],
      newMessageBody: ''
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }

}



window.store = store;