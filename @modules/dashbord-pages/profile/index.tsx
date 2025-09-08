import React from 'react';

const UserProfile = () => {
    return (
         <div className="p-6 rounded-md  bg-[#f8f8f8] space-y-4">
     <h2 className="text-[24px]  mb-4 ">Edit Profile</h2>
      <div className="w-10 h-1 bg-gray-700 mb-6" />

      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-gray-200" />
        <button className="px-4 py-2 bg-gray-700 text-white rounded">Upload</button>
      </div>

      <form className="grid grid-cols-2 gap-4">
        <input placeholder="Name" className=" outline-none p-2  bg-white border-none shadow-sm "  />
        <input placeholder="Email" className=" outline-none p-2  bg-white border-none shadow-sm "  />
        <input placeholder="Phone" className=" outline-none p-2  bg-white border-none shadow-sm "  />
        <input placeholder="Fax" className=" outline-none p-2  bg-white border-none shadow-sm " />
        <input placeholder="City" className=" outline-none p-2  bg-white border-none shadow-sm " />
        <select className=" rounded outline-none p-2  bg-white border-none shadow-sm">
          <option>Select Country</option>
        </select>
        <input placeholder="Zip" className="outline-none p-2  bg-white border-none shadow-sm" />
        <input placeholder="State" className="outline-none p-2  bg-white border-none shadow-sm" />
        <textarea placeholder="Address" rows={3} className="col-span-2 lg:h-[300px] md:h-[300px] + rounded outline-none p-2  bg-white border-none shadow-sm"></textarea>
      </form>

      <button className="px-6 py-2 bg-gray-700 text-white rounded ">Save</button>
    </div>
    );
};

export default UserProfile;