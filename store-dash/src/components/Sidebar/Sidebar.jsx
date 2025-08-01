import React from 'react'
import { RouteSeletect } from './RouteSeletect';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-stone-600 text-white flex flex-col sticky top-0 shadow-lg">
      {/* Logo / Avatar */}
      <div className="flex items-center p-4 border-b border-white relative">
        <img
          className="w-12 h-12 rounded-full bg-stone  -600 shadow-md"
          src="https://api.dicebear.com/9.x/rings/svg?seed=Adrian"
          alt="avatar"
        />
        <div className="ml-3">
          <h1 className="text-xl font-bold leading-tight">Dashboard</h1>
          <span className="text-xs text-stone-200">Quản lý hệ thống</span>
        </div>

      </div>

      {/* Navigation */}
      <RouteSeletect />

      {/* Footer (optional) */}
      <div className="p-4 border-t border-white text-xs text-stone-200">
        © 2025 TaxiApp
      </div>
    </aside>
  );
};

export default Sidebar;
