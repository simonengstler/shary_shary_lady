const { database } = require('../config/config');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection(database);

const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE user_id = ?';
    connection.query(query, [userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = {
  getUserById,
  getUsers,
};
