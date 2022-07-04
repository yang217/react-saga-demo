import { combineReducers } from "redux";
const initialState = {
  users: []
};
const users = (state = { ...initialState }, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      nextState.users = action.payload.users;
  }
  return nextState;
};

export default combineReducers({
  UserInfo: users
});
