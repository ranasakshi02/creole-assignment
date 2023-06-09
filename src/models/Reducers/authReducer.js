const initialState = {
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {...state, user: action.payload};
    case 'LOGOUT_SUCCESS':
      return {...state, user: null};
    default:
      return state;
  }
}
