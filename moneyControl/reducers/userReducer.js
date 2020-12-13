const initialState = {
  category_color: '#93278F',
  amount: '',
};

const userReducer = (state = initialState, action) => {
  if (action.type === 'set_category_color') {
    return {
      ...state,
      category_color: action.color,
    };
  } else if (action.type === 'set_amount') {
    return {
      ...state,
      amount: action.amount,
    };
  }
  return state;
};

export default userReducer;
