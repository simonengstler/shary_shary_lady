import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../app/services/api';

const Group = () => {
    const navigate = useNavigate();
    const { groupId } = useParams();

    const [group, setGroup] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getGroupById(groupId);
                setGroup(response.data);
            } catch (error) {
                console.error('Group Fetch Error:', error);
            }
        };

        fetchData();
    }, [groupId]);

    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
            <div className="bg-white py-8 rounded-lg shadow-md w-screen h-screen">
                <button
                    className="absolute top-4 left-4 text-black"
                    onClick={() => navigate('/groups')}
                >
                    &larr;
                </button>
                <h3 className="text-2xl font-semibold text-center mb-6 font-abel">
                    {group?.name || 'Loading...'}
                </h3>
                <div className="w-screen text-center">
                    {group ? (
                        <>
                            <h2 className="text-xl font-semibold">{group.name}</h2>
                            <p>{group.description}</p>
                        </>
                    ) : (
                        <p>Loading group information...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Group;
