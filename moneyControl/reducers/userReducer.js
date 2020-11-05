const initialState = {
  authenticate: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === 'authenticate_user') {
    return {
      ...state,
      authenticate: action.authenticate,
    };
  }
  return state;
};

export default userReducer;
