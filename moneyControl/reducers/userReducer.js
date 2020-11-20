const initialState = {
  category_color: '#93278F',
};

const userReducer = (state = initialState, action) => {
  if (action.type === 'set_category_color') {
    return {
      ...state,
      category_color: action.color,
    };
  }
  return state;
};

export default userReducer;
