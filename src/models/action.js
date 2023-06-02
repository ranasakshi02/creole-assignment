
export const login = (email, password) => ({
  type: 'LOGIN',
  payload: {email, password},
});

export const register = (username, email,password) => ({
  type: 'REGISTER',
  payload: {username,email, password},
});

export const logout = () => ({
  type: 'LOGOUT',
});
