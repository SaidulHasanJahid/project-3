import React from 'react';

const ResetPassword = () => {
  return (
    <div className="w-full mx-auto p-6 bg-[#f8f8f8] ">
      <h2 className="text-[24px]  mb-4 ">Reset Password</h2>
      <div className="w-10 h-1 bg-gray-700 mb-6" />

      <form className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className=" bg-white shadow-sm outline-none  w-full p-3 "
        />
        <input
          type="password"
          placeholder="New Password"
          className=" bg-white shadow-sm outline-none  w-full p-3 "
        />
        <input
          type="password"
          placeholder="Re-Type New Password"
          className=" bg-white shadow-sm outline-none  w-full p-3 "
        />

        <button
          type="submit"
          className="  mt-2 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
