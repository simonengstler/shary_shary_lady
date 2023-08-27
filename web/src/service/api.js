import axios from 'axios';

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  //getUserData: (userId) => apiInstance.get(`/users/${userId}`),
  getGroups: () => apiInstance.get('/groups'),
  loginUser: (loginData) => apiInstance.post('/auth/login', loginData),
  registerUser: (registerData) => apiInstance.post('/auth/register', registerData),
};

export default api;
