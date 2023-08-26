import axios from 'axios';

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set default content type
    // You can also set other headers here
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
