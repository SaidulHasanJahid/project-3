// SearchDrawer.tsx
import React from 'react';
import { Drawer, Input } from 'antd';
import { Search, X } from 'lucide-react';

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDrawer({ open, onClose }: SearchDrawerProps) {
  return (
    <Drawer
      placement="bottom"
      height="90vh"
      open={open}
      onClose={onClose}
      closeIcon={<X className="w-6 h-6 text-black" />}
      styles={{
        header: { borderBottom: 'none', padding: '40px 20px 0' },
        body: { padding: '20px 20px 80px' },
      }}
    >
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <h2 className="text-5xl md:text-6xl font-medium text-black mb-12 text-left">
          Search for products
        </h2>
        <div className="flex items-center border border-gray-400 h-20 rounded">
          <Input
            placeholder="Search for products"
            variant="borderless"
            className="text-2xl placeholder-gray-500 flex-1 pl-8"
            autoFocus
          />
          <div className="w-20 h-20 bg-black flex items-center justify-center cursor-pointer rounded-r">
            <Search className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </Drawer>
  );
}