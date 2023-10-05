const { database } = require("../config/config");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(database);

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

const getGroupById = (groupId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM user_groups WHERE group_id = ?";
    connection.query(query, [groupId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const getGroupsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM group_members INNER JOIN user_groups ON group_members.group_id = user_groups.group_id WHERE group_members.user_id = ?";
    connection.query(query, [userId], (error, results) => {
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
};

const getMembersByGroupId = (groupId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users INNER JOIN group_members ON users.user_id = group_members.user_id WHERE group_members.group_id = ?";
    connection.query(query, [groupId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getSharedSongsByGroupId = (groupId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM shared_songs WHERE group_id = ?";
    connection.query(query, [groupId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const addSharedSong = (userId, groupId, songLink, active) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO shared_songs (user_id, group_id, song_url, active) VALUES (?, ?, ?, ?)";
    connection.query(query, [userId, groupId, songLink, active], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve('Insert successful');
      }
    });
  });
}

const addUserToGroup = (userId, groupId) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO group_members (user_id, group_id) VALUES (?, ?)";
    connection.query(query, [userId, groupId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve('Insert successful');
      }
    });
  });
}

module.exports = {
  getGroups,
  getGroupById,
  getGroupsByUserId,
  createGroup,
  getMembersByGroupId,
  getSharedSongsByGroupId,
  addSharedSong,
  addUserToGroup,
};
