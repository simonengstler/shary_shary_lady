import React, { useState } from 'react';
import InviteFriend from './InviteFriend';

const OptionsModal = ({ isOpen, onClose, group }) => {
  const [inviteFriendOpen, setInviteFriendOpen] = useState(false);

  const onInviteFriendClick = () => {
    setInviteFriendOpen(true);
  };

  const closeInviteFriendModal = () => {
    setInviteFriendOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-semibold mb-4">Options</h3>
        <button
          className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 m-1 rounded"
          onClick={onInviteFriendClick}
        >
          Invite a Friend
        </button>
        <button
          className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 m-1 rounded"
          onClick={() => ''}
        >
          Leave Group
        </button>
        <button
          className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 m-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
        {inviteFriendOpen && (
          <InviteFriend group={group} onClose={closeInviteFriendModal} />
        )}
      </div>
    </div>
  );
};

export default OptionsModal;
