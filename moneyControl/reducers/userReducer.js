const initialState = {
  category_color: '#93278F',
  amount: '',
  expense_income_screen: 'expense',
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
  } else if (action.type === 'set_expense_income_screen') {
    return {
      ...state,
      expense_income_screen: action.screen,
    };
  }
  return state;
};

export default userReducer;
