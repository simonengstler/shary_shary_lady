import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import api from '../app/services/api';

const Groups = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const { userInfo } = useSelector((state) => state.auth);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    setNewGroupName(e.target.value);
  };

  const performLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleCreateGroup = () => {
    api.createGroup({name: newGroupName, creatorUserId: userInfo.userId});

    toggleModal();
  };

  const createNewGroup = () => {
    toggleModal();
  };


  useEffect(() => {
    api
      .getGroups()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, [handleCreateGroup]);

  const groupsData = data;

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <div className="bg-white py-8 rounded-lg shadow-md relative w-screen h-screen">
        <button
          className="absolute top-4 left-4 text-black"
          onClick={performLogout}
        >
          &larr;
        </button>
        <h3 className="text-2xl font-semibold text-center mb-6 font-abel">
          Groups
        </h3>
        <div className="w-screen">
          {groupsData.map((group) => (
            <div
              key={group.group_id}
              className="bg-gray-50 text-center font-bold py-5 border-t-2 border-gray-150 shadow-md"
              onClick={() => navigate(`/groups/${group.group_id}`)}
            >
              <span>{group.name}</span>
            </div>
          ))}
        </div>

        {/* Button to open the modal */}
        <button
          className="absolute top-4 right-4 text-white bg-gray-300 hover:bg-gray-400 rounded-md w-10 h-10 flex items-center justify-center"
          onClick={createNewGroup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
              <h3 className="text-xl font-semibold mb-4">Create a New Group</h3>
              <input
                type="text"
                placeholder="GroupName"
                className="border border-gray-300 px-3 py-2 rounded mb-4 w-full"
                value={newGroupName}
                onChange={handleInputChange}
              />
              <div className="flex justify-end">
                <button
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mr-2"
                  onClick={handleCreateGroup}
                >
                  OK
                </button>
                <button
                  className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Groups;
