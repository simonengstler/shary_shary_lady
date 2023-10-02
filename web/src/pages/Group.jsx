import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../app/services/api';

const Group = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);

  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState(null);
  const [sharedSongs, setSharedSongs] = useState(null);
  const [sharedSongsByUserId, setSharedSongsByUserId] = useState(null);

  const fetchData = async () => {
    try {
      const groupsResponse = await api.getGroupById(groupId);
      const membersResponse = await api.getMembersByGroupId(groupId);
      const sharedSongsResponse = await api.getSharedSongsByGroupId(groupId);
  
      if (
        groupsResponse.error ||
        membersResponse.error ||
        sharedSongsResponse.error
      ) {
        console.error('API Error:', groupsResponse.error || membersResponse.error || sharedSongsResponse.error);
        return;
      }
  
      setGroup(groupsResponse.data);
      setMembers(membersResponse.data);
      setSharedSongs(sharedSongsResponse.data);
      let sharedSongsByUserId = {};
      if (Object.keys(sharedSongsResponse.data).length > 0) {
        sharedSongsByUserId = sharedSongsResponse.data.reduce((map, song) => {
          if (song.active) {
            map[song.userId] = song;
          }
          return map;
        }, {});
      }
      setSharedSongsByUserId(sharedSongsByUserId);
    } catch (error) {
      console.error('Group Fetch Error:', error);
    }
  };

  useEffect(() => {
      fetchData();
  }, [groupId]);

  const handlePostLink = (userId, link) => {
    api.shareActiveSong({ userId: userId, groupId: groupId, songLink: link });
    console.log(`Saving link for user_id ${userId}: ${link}`);
    fetchData();
  };

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
              <h2 className="text-xl text-left pl-2 font-semibold">
                {'Current Shares:'}
              </h2>
              <div className="mt-4">
                {members ? (
                  <>
                    {members.map((member) => (
                      <div key={member.user_id} className="mb-4">
                        <h4 className="text-lg text-left pl-3 font-semibold">
                          {member.username}:
                        </h4>
                        {member.user_id === userInfo.userId ? (
                          <div className="my-2 text-left">
                            <input
                              type="text"
                              placeholder={`Share your current gem!`}
                              className="px-3 py-2 mx-5 rounded border border-gray-300"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handlePostLink(
                                    member.user_id,
                                    e.target.value,
                                  );
                                  e.target.value = '';
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                        <div className="text-left pl-4 text-gray-500">
                          {sharedSongs &&
                          sharedSongsByUserId[member.user_id] ? (
                            <a
                              href={
                                sharedSongsByUserId[member.user_id].songLink
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sharedSongsByUserId[member.user_id].songLink}
                            </a>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Loading members...</p>
                )}
              </div>
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
