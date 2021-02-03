import axios from 'axios';

const axiosWithAuth = () => {
  const token = sessionStorage.getItem('token');
  console.log(token)
  return axios.create({
    baseURL: 'https://co-make-tt-33.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  });
};
export default axiosWithAuth;
