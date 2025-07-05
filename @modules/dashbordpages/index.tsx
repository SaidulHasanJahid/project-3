'use client';

import React, { useState } from 'react';
import Rewards from './rewards';
import Affiliate from './afiliate';
import DashbordCon from './dashbordcon';
import Purchased from './purchased-Items';
import Link from 'next/link';
import Deposite from './deposite';
import Transactions from './transactions';
import Withdrow from './withdrow';
import FavouriteSellers from './favoritesellers';
import Order from './order';
import Message from './message';
import Tickets from './tickets';
import UserProfile from './profile';
import ResetPassword from './resatepassword';

const Dashboard = () => {
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
      {/* ✅ Top Banner Section with Background Image */}
      <div
        className="w-full h-[180px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://eco.rafiinternational.com/assets/images/1648110638breadpng.png")',
        }}
      >
        <h1 className="text-3xl font-bold">Dashboard
</h1>
        <p className="text-sm mt-1   ">
          <Link href={"/"}>
            <span className="text-[16px]">Home</span>
          </Link>{" "}
          / Dashboard

        </p>
      </div>

      
     <div className="container">
     <div className="min-h-screen  p-4 md:p-8">
      <div className="bg-white  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
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

        {/* Main Content */}
        <div className="md:col-span-3 grid gap-6">
          {/* DASHBOARD CONTENT */}
          {selectedSection === 'Dashboard' && (
           <DashbordCon />
          )}

          {/* REWARDS SECTION */}
          {selectedSection === 'Rewards' && (
            <Rewards />
          )}
          {/* purchased-Items */}
          {selectedSection === 'Purchased Items' && (
            <Purchased />
          )}
          {/* purchased-Items */}
          {selectedSection === 'Deposit' && (
            <Deposite />
          )}
          {/* Transactions */}
          {selectedSection === 'Transactions' && (
            <Transactions />
          )}
          {/* Withdrow */}
          {selectedSection === 'Withdraw' && (
            <Withdrow  />
          )}
          {/* FavouriteSellers */}
          {selectedSection === 'Favourite Sellers' && (
            <FavouriteSellers />
          )}
          {/* Order Tracking */}
          {selectedSection === 'Order Tracking' && (
            <Order />
          )}
          {/* message */}
          {selectedSection === 'Messages' && (
            <Message />
          )}
          {/* Tickets */}
          {selectedSection === 'Tickets' && (
            <Tickets />
          )}
          {/* Dispute */}
          {selectedSection === 'Disputes' && (
            <Tickets />
          )}
          {/* UserProfile */}
          {selectedSection === 'Edit Profile' && (
            <UserProfile />
          )}
          {/* Dispute */}
          {selectedSection === 'Reset Password' && (
            <ResetPassword />
          )}

          {/* AFFILIATE PROGRAM SECTION */}
          {selectedSection === 'Affiliate Program' && (
            <Affiliate />
          )}
        </div>
      </div>
    </div>
   </div>
  </div>
  );
};

export default Dashboard;
