import "isomorphic-fetch";
const API_ROOT = "https://jsonplaceholder.typicode.com";

const getURL = endpoint => {
  const url = endpoint.indexOf(API_ROOT) > -1 ? endpoint : API_ROOT + endpoint;
  return url;
};

const checkResponseStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const get = (endpoint, params) => {
  let url = getURL(endpoint);
  let config = {
    method: "GET",
    credentials: "include"
  };
  let promise = fetch(url, config)
    .then(response => {
      return checkResponseStatus(response);
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
  return promise;
};

export default {
  get
};
