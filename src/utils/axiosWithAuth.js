import axios from 'axios';

const axiosWithAuth = () => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  return axios.create({
    baseURL: 'https://comake-backend-lambda.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  });
};
export default axiosWithAuth;
