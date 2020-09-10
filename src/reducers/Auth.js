const LOGIN = "AUTH/LOGIN";
const LOGOUT = "AUTH/LOGOUT"

const defaultUserInfo = {
  username: 'Demo User',
  token: '',
  isLoggedIn:false
};
export const setLogin = (token) => ({
  type: LOGIN,
  token
});
export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
      };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          token: null,
        };
      default:
        break;
  }
  return state;
}