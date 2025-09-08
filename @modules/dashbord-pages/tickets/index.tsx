import React from "react";
import { FaPlus } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className="bg-[#f8f8f8] p-6 rounded shadow text-sm">
      <div className="flex items-center mb-4 py-5">
        <h3 className="font-semibold text-[24px] text-[#121926] gap-3 border-[#141926] py-3 w-16 border-b-2  mb-6">
          Tickets
        </h3>
        <button className="flex items-center px-4 py-2 bg-gray-700 shadow mb-4 text-white rounded hover:bg-gray-700 ml-9">
          <FaPlus className="mr-2" />
          Add Tickets
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
        <div>
          Show{" "}
          <select className="border px-2 py-1  outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>{" "}
          entries
        </div>
        <div>
          Search:{" "}
          <input type="text" className="border px-2 py-1  ml-2 outline-none" />
        </div>
      </div>

      <table className="w-full text-sm shadow">
        <thead className="  bg-gray-700 text-white">
          <tr>
            <th className="py-2 px-3">Subjext</th>
            <th className="py-2 px-3">Message</th>
            <th className="py-2 px-3">time</th>
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

      <div className="mt-4 text-xs text-[#767678] ">
        <div>Showing 0 to 0 of 0 entries</div>
        <div className="space-x-4">
          <button className="text-[#767678] text-[16px]  mt-4 lg:ml-100 md:ml100 ">
            Previous
          </button>
          <button className="text-[#767678] text-[16px]  mt-4  ">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
