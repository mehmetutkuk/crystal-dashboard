const defaultUserInfo = {
  username: 'Demo User',
  token: '',
  isLoggedIn:false
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}