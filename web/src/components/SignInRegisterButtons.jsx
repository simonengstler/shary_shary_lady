import React from 'react';

const SignInRegisterButtons = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button className="bg-white text-black border-2 border-black px-4 py-2 rounded">
        SIGN IN
      </button>
      <button className="text-white bg-black border-2 border-black px-4 py-2 rounded">
        REGISTER
      </button>
    </div>
  );
};

export default SignInRegisterButtons;
