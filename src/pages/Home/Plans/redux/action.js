import { ADD,DEL } from "./constant";
// 返回

export const mapStateToProps = (state) => {
  // 返回store.state.plans
  return {messages: state.plans}
};

export const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message,index) => {
      dispatch(addMessage(message,index))
    },
    delMessage:(index) =>{
      dispatch(deleteMessage(index))
    }
  }
};
export const addMessage = (message,index) => {
    return {
      type: ADD,
      index: index,
      message: message
    }
  };

export const deleteMessage = (index) => {
  return {
    type: DEL,
    index: index
  }
};
  