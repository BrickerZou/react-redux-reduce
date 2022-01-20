import {ADD,DEL} from './constant'
export const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          {message:action.message,id:action.index}
        ];
      case DEL:
        return [ ...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
      default:
        return state;
    }
  };
  