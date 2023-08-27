import axios from 'axios';

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getUserData: (userId) => apiInstance.get(`/users/${userId}`),
  getGroups: () => apiInstance.get('/api/groups'),
  createPost: (postData) => apiInstance.post('/posts', postData),
  
};

export default api;
