import axios from 'axios';
import history from './history';


export const callApi = (url, apiMethod, query) =>
  new Promise((resolve, reject) => {
    axios({
      method: apiMethod,
      url: 'http://hn.algolia.com/api/v1/' + url, // Api URL
      data: apiMethod === 'POST' || apiMethod === 'post' ? query : undefined, // API post parameters,
      params: apiMethod === 'GET' || apiMethod === 'get' ? query : undefined, // API get params
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-csrftoken': Math.random(),
      },
    })
      .then(response => {
        resolve(handleSuccess(response));
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          cookieLib.clearAllCookies();
          history.push(`/`);
          const errRes = { ...error };
          errRes.logout = true;
          errRes.data = {};
          errRes.data.res_str = 'Your session has expired.';
          reject(errRes);
        } else {
          reject(handleError(error.response || {
              status: 0,
              statusText: error.stack,
              data: { res_str: error.message },
            },
          ));
        }
      });
  });
const handleSuccess = response => {
  const { data } = response;
  return data;
};

const handleError = error => {
  // const message = error.data ? error.data.res_str : 'API failed';
  const { status, statusText, data } = error;
  const errRes = {
    status,
    logout: false,
    statusText,
    data,
  };

  switch (status) {
    case 401: // do something when you're unauthenticated
      errRes.logout = true;
      errRes.data = {};
      errRes.data.res_str = 'Your session has expired.';
      // localStorage.clear();
      // cookieLib.clearAllCookies();
      history.push(`/`);
      break;
    case 403:
      // do something when you're unauthorized to access a resourceerrRes.logout = false;
      errRes.logout = true;
      break;
    case 500:
      errRes.logout = false;
      break;
    default:
      // handle normal errors with some alert or whatever
      errRes.logout = false;
      break;
  }

  return errRes; // message; // I like to get my error message back
};
