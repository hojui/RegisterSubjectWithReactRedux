const initState = {
  text: "",
  subject: [],
  registerSubject: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_REGISTER_SUBJECT":
      const tmp1 = state.registerSubject.concat([action.subject]);
      return {
        ...state,
        registerSubject: tmp1
      };
    case "ADD_SUBJECT":
      const tmp2 = state.subject.concat(action.subject);
      return {
        ...state,
        subject: tmp2
      };
    case "REMOVE_REGISTER_SUBJECT":
      const tmp3 = state.registerSubject;
      return {
        ...state,
        registerSubject: tmp3
          .slice(0, action.index)
          .concat(tmp3.slice(action.index + 1, tmp3.length))
      };
    case "REMOVE_SUBJECT":
      const tmp4 = state.subject;
      return {
        ...state,
        subject: tmp4
          .slice(0, action.index)
          .concat(tmp4.slice(action.index + 1, tmp4.length))
      };
    case "UPDATE_TEXT":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

export const addSubject = subject => {
  return {
    type: "ADD_SUBJECT",
    subject: subject
  };
};

export const addRegisterSubject = subject => {
  return {
    type: "ADD_REGISTER_SUBJECT",
    subject: subject
  };
};

export const removeSubject = i => {
  return {
    type: "REMOVE_SUBJECT",
    index: i
  };
};

export const removeRegisterSubject = i => {
  return {
    type: "REMOVE_REGISTER_SUBJECT",
    index: i
  };
};

export const updateText = text => {
  return {
    type: "UPDATE_TEXT",
    text: text
  };
};
