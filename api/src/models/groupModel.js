const { database } = require("../config/config");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(database);

const getGroupByName = (groupName) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM groups WHERE name = ?";
    connection.query(query, [groupName], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const getGroups = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM user_groups';
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const createGroup = (name, creatorUserId) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO user_groups (name, created_by) VALUES (?, ?)";
    connection.query(query, [name, creatorUserId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}

module.exports = {
  getGroupByName,
  getGroups,
  createGroup,
};
