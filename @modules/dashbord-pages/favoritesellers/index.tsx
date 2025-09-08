import React from "react";

const FavouriteSellers = () => {
  return (
    <div>
      <h3 className="font-semibold text-[24px] text-[#121926] gap-3 border-b-2 border-[#141926] py-3 ">
        Favorite Sellers
      </h3>
      <table className="w-full text-sm shadow">
        <thead className="  bg-gray-700 text-white mt-3">
          <tr>
            <th className="py-2 px-3">Shop Name </th>
            <th className="py-2 px-3">Owner Name </th>
            <th className="py-2 px-3">Address </th>
            <th className="py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="text-center py-6 bg-white ">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FavouriteSellers;
