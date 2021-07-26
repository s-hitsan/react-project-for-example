const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;