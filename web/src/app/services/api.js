import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getGroups: () => apiInstance.get('/groups'),
  getGroupById: (groupId) => apiInstance.get(`/groups/${groupId}`),
  createGroup: (groupData) => apiInstance.post('/groups', groupData),
  loginUser: (loginData) => apiInstance.post('/auth/login', loginData),
  registerUser: (registerData) => apiInstance.post('/auth/register', registerData),
};

export default api;
