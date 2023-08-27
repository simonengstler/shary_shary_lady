import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';

const Groups = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // const groupsData = [
  //   { id: 1, name: 'Group 1' },
  //   { id: 2, name: 'Group 2' },
  //   { id: 3, name: 'Group 3' },
  //   // Add more groups as needed
  // ];

  useEffect(() => {
    api
      .getGroups()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  const groupsData = data;

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <div className="bg-white py-8 rounded-lg shadow-md relative w-screen h-screen">
        <button
          className="absolute top-4 left-4 text-black"
          onClick={() => navigate('/')}
        >
          &larr;
        </button>
        <h3 className="text-2xl font-semibold text-center mb-6 font-abel">
          Groups
        </h3>
        <div className="w-screen ">
          {groupsData.map((group) => (
            <div
              key={group.id}
              className="bg-gray-50 text-center font-bold py-5 border-t-2 border-gray-150 shadow-md"
            >
              <span>{group.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
