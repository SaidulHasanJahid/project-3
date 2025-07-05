import React from 'react';
import { FaPlus } from 'react-icons/fa';

const DashbordCon = () => {
    return (
        <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded shadow">
                  <h3 className="font-semibold px-5 py-3 border-b border-[#ddd]">
                    Account Information
                  </h3>
                  <div className="px-5 py-4 space-y-1 text-sm leading-[1.8]">
                    <p><strong>60.yugeguh</strong></p>
                    <p className="text-gray-600">Email: xcz@gmail.com</p>
                    <p className="text-gray-600">Phone: 8o:70p</p>
                    <p className="text-gray-600">Address: kfgyt</p>
                  </div>
                </div>

                <div className="bg-white rounded shadow">
                  <h3 className="font-semibold px-5 py-3 border-b border-[#ddd]">
                    My Wallet
                  </h3>
                  <div className="px-5 py-4 space-y-2 text-sm leading-[1.8]">
                    <p className="text-gray-700">Affiliate Bonus: <strong>0$</strong></p>
                    <p className="text-gray-700">Wallet Balance: <strong>0$</strong></p>
                    <button className="flex items-center px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                      <FaPlus className="mr-2" /> Add Deposit
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded shadow flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-full border-[10px] border-blue-200 flex items-center justify-center text-xl font-bold text-blue-500">
                    0
                  </div>
                  <p className="mt-3 text-gray-700">Total Orders</p>
                  <span className="text-xs text-gray-500">All Time</span>
                </div>
                <div className="bg-white rounded shadow flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 rounded-full border-[10px] border-yellow-300 flex items-center justify-center text-xl font-bold text-yellow-500">
                    0
                  </div>
                  <p className="mt-3 text-gray-700">Pending Orders</p>
                  <span className="text-xs text-gray-500">All Time</span>
                </div>
              </div>

              <div className="bg-white rounded shadow overflow-x-auto">
                <h3 className="text-base font-semibold px-5 py-3 border-b border-[#ddd]">
                  Recent Orders
                </h3>
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="px-5 py-2">#Order</th>
                      <th className="px-5 py-2">Date</th>
                      <th className="px-5 py-2">Order Total</th>
                      <th className="px-5 py-2">Order Status</th>
                      <th className="px-5 py-2">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-5 py-4 text-center text-gray-500" colSpan={5}>
                        No orders found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
    );
};

export default DashbordCon;