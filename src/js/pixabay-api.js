import axios from 'axios';
export default getImagesByQuery;

function getImagesByQuery(query) {
  return axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '28573378-d6ea96aa58230c7b9cb77205d',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => res.data)
    .catch(error => {
      throw handleAxiosError(error);
    });
}

function handleAxiosError(error) {
  let message = '';
  if (error.message === 'Network Error') {
    message = 'ERR_INTERNET_DISCONNECTED';
  } else if (error.response) {
    message = `ERR_SERVER_ERROR: ${error.response.status}`;
  } else if (error.request) {
    message = 'ERR_REQUEST_ERROR';
  }
  console.error('Axios error:', error);
  return message;
}