import axios from 'axios';

const handleSuccess = response => {
  const { data } = response;
  return data;
};


export const callApi = (url, apiMethod, query) =>
  new Promise((resolve, reject) => {
    axios({
      method: apiMethod,
      url: `https://hn.algolia.com/api/v1/${url}`,
      data: apiMethod === 'POST' || apiMethod === 'post' ? query : undefined, // API post parameters,
      params: apiMethod === 'GET' || apiMethod === 'get' ? query : undefined, // API get params
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
      .then(response => {
        resolve(handleSuccess(response));
      })
      .catch(error => {
        reject(error);
    });
  });

