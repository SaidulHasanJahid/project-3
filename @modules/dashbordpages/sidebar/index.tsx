import React, { useState } from 'react';




const Sidebar = () => {
      const [selectedSection, setSelectedSection] = useState('Dashboard');

  const sidebarItems = [
    'Dashboard',
    'Purchased Items',
    'Deposit',
    'Transactions',
    'Rewards',
    'Affiliate Program',
    'Withdraw',
    'Order Tracking',
    'Favourite Sellers',
    'Messages',
    'Tickets',
    'Disputes',
    'Edit Profile',
    'Reset Password',
    'Logout',
  ];
    return (
        <div>
             {/* Sidebar */}
        <div className="bg-[#f8f8f8]  p-7 rounded shadow overflow-hidden">
          <h2 className="text-base font-semibold px-5 py-5 border-b border-[#ddd] ">
            DASHBOARD
          </h2>
          <ul className="divide-y divide-[#ddd]">
            {sidebarItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedSection(item)}
                  className="w-full text-left px-5 py-2.5 text-sm text-[#767678] hover:text-[#141926] cursor-pointer transition leading-[1.8]"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
    );
};


export default Sidebar;