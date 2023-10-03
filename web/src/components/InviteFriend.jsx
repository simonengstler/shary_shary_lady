import React, { useState } from 'react';
import api from '../app/services/api';

const InviteFriend = ({ group, onClose }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('green'); // Default color

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const inviteUsernameToGroup = (groupId) => {
    api.inviteUsernameToGroup({ username, groupId })
      .then((res) => {
        setMessage(res.data.message);
        setMessageColor('green');
      })
      .catch((err) => {
        setMessage(err.response.data.error);
        setMessageColor('red');
      });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Invite a Friend</h3>
      {message && (
        <div style={{ color: messageColor }} className="mb-4">
          {message}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="border border-gray-300 px-3 py-2 rounded w-full"
          placeholder="Enter friend's username"
        />
      </div>
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mr-2"
        onClick={() => inviteUsernameToGroup(group.group_id)}
      >
        Invite friend
      </button>
      <button
        className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default InviteFriend;
