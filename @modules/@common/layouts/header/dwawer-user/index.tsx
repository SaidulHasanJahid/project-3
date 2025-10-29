"use client";

import { Drawer } from "antd";

export default function UserDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer title="My Account" placement="right" onClose={onClose} open={open} width={320}>
      <ul className="space-y-3 mt-2">
        {["Login", "Register", "My Orders", "Wishlist", "Settings"].map((item) => (
          <li key={item} className="cursor-pointer text-gray-800 hover:text-blue-600 transition-all">
            {item}
          </li>
        ))}
      </ul>
    </Drawer>
  );
}
