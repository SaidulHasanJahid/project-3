// LoginDrawer.tsx
import React from 'react';
import { Drawer, Input } from 'antd';
import { X } from 'lucide-react';

interface LoginDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginDrawer({ open, onClose }: LoginDrawerProps) {
  return (
    <Drawer
      placement="right"
      width={typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : 420}
      open={open}
      onClose={onClose}
      closeIcon={<X className="w-6 h-6" />}
      title="Sign in"
      styles={{
        header: { borderBottom: 'none', padding: '16px 24px' },
        body: { padding: '0 24px 24px' },
      }}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Username or email address *</label>
          <Input placeholder="" size="large" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password *</label>
          <Input.Password placeholder="" size="large" />
        </div>
        <button className="w-full bg-black text-white py-3 text-base font-medium">
          LOG IN
        </button>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>
          <a href="#" className="text-sm hover:underline">
            Lost your password?
          </a>
        </div>
        <div className="pt-8 text-center">
          <p className="text-base mb-4">No account yet?</p>
          <button className="w-full border border-black py-3 text-base font-medium underline">
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </Drawer>
  );
}