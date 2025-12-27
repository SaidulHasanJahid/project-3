// MenuDrawer.tsx
import React from 'react';
import { Drawer, Input, Tabs } from 'antd';
import { Search, ChevronRight, Heart, Plus, User } from 'lucide-react';

const { TabPane } = Tabs;

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onSearchClick: () => void;
}

export default function MenuDrawer({ open, onClose, onSearchClick }: MenuDrawerProps) {
  return (
    <Drawer
      placement="left"
      width={280}
      open={open}
      onClose={onClose}
      closeIcon={null}
      styles={{
        header: { display: 'none' },
        body: { padding: 0 },
      }}
    >
      <div className="flex flex-col h-full bg-white">
        <div className="px-4 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center border border-gray-300 rounded-md h-12 bg-white">
            <Input
              placeholder="Search for products"
              variant="borderless"
              className="text-base placeholder-gray-500 flex-1 pl-4"
              readOnly
              onClick={onSearchClick}
            />
            <Search className="w-6 h-6 text-gray-500 mr-4" />
          </div>
        </div>
        <div className="bg-white border-b border-gray-200">
          <Tabs defaultActiveKey="menu" centered tabBarGutter={40}>
            <TabPane
              tab={<span className="text-lg font-bold text-black uppercase">Menu</span>}
              key="menu"
            />
            <TabPane
              tab={<span className="text-lg font-medium text-gray-500 uppercase">Categories</span>}
              key="categories"
            />
          </Tabs>
        </div>
        <div className="flex-1 overflow-y-auto bg-white px-6 py-8">
          <div className="space-y-0">
            <div className="flex items-center justify-between py-5 border-b border-gray-200">
              <span className="text-lg font-bold uppercase">Bags</span>
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </div>
            <div className="py-5 border-b border-gray-200">
              <span className="text-lg font-medium uppercase">Fashions</span>
            </div>
            <div className="py-5 border-b border-gray-200">
              <span className="text-lg font-medium uppercase">Travels</span>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-gray-200">
              <span className="text-lg font-bold uppercase">Wallets</span>
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </div>
            <div className="py-5 border-b border-gray-200">
              <span className="text-lg font-medium uppercase">Shop</span>
            </div>
            <div className="py-5 border-b border-gray-200">
              <span className="text-lg font-medium uppercase">Blog</span>
            </div>
            <div className="py-5 border-b border-gray-200">
              <span className="text-lg font-medium uppercase">About Us</span>
            </div>
          </div>
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 py-3">
              <Heart className="w-6 h-6 text-black" />
              <span className="text-base font-medium">Wishlist</span>
            </div>
            <div className="flex items-center gap-4 py-3">
              <Plus className="w-6 h-6 text-black rotate-45" />
              <span className="text-base font-medium">Compare</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-black" />
                <span className="text-base font-medium">Login / Register</span>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}