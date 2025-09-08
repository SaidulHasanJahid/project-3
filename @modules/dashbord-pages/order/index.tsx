// components/TrackingCode.tsx
import React from 'react';

const Order = () => {
  return (
    <div className="p-6   shadow-md bg-[#f8f8f8]">
       <h3 className="font-semibold text-[24px] text-[#121926] gap-3 border-[#141926] py-3 w-50 border-b-2  mb-6">
        Get Tracking Code
        </h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Get Tracking Code"
          className="flex-1 p-2 border rounded-full outline-none border-none shadow-sm bg-white "
        />
        <button className="px-4 py-2 bg-gray-700 text-white rounded">View Tracking</button>
      </div>
    </div>
  );
};

export default Order;
