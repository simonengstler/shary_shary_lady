import axios from 'axios';

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define API functions
const api = {
  // Example function to get user data
  getUserData: (userId) => apiInstance.get(`/users/${userId}`),

  // Example function to create a new post
  createPost: (postData) => apiInstance.post('/posts', postData),
  
  // Add more API functions as needed
};

export default api;
