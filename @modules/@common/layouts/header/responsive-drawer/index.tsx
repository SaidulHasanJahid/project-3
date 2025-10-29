"use client";

import React from "react";
import { Drawer, Tabs } from "antd";
import { IoMdClose } from "react-icons/io";

const { TabPane } = Tabs;

interface MobileMenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  open,
  onClose,
}) => {
  const menuItems = [
    "Home",
    "Shop",
    "Bags",
    "Wallets",
    "About Us",
    "Contact Us",
    "Blog",
  ];

  const categories = [
    "Backpacks",
    "Laptop Bags",
    "Ladies Tote",
    "Travel Bags",
    "Briefcase Style",
    "Corporate Bags",
  ];

  return (
    <Drawer
      placement="left"
      open={open}
      onClose={onClose}
      width={300}
      closeIcon={<IoMdClose size={22} />}
      styles={{
        body: { padding: 0 }, // ✅ new syntax replaces bodyStyle
      }}
    >
      <div className="p-4">
        <Tabs defaultActiveKey="1" centered>
          {/* ===== Menu Tab ===== */}
          <TabPane tab="Menu" key="1">
            <ul className="flex flex-col gap-4 mt-4">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className="text-[16px] text-[#333] font-medium hover:text-black cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </TabPane>

          {/* ===== Categories Tab ===== */}
          <TabPane tab="Categories" key="2">
            <ul className="flex flex-col gap-4 mt-4">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className="text-[16px] text-[#333] font-medium hover:text-black cursor-pointer transition"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </TabPane>
        </Tabs>
      </div>
    </Drawer>
  );
};

export default MobileMenuDrawer;
