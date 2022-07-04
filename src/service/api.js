import request from "./index";

const endPoint = {
  users: "/users"
};

export const fetchUser = () => {
  return request.get(endPoint.users);
};
