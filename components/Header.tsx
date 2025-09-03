import React from 'react';
import { APP_NAME } from '../constants';
import { LogoIcon, UserIcon, LogOutIcon } from './Icons';
import type { User } from '../types';

interface HeaderProps {
  user: User | null;
  onReset: () => void;
  onLogout: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onReset, onLogout, onLoginClick, onSignupClick }) => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900/60 backdrop-blur-lg border-b border-indigo-500/10 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={onReset} title="Go to Dashboard">
          <LogoIcon className="h-8 w-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
          <h1 className="text-2xl font-bold text-gray-100 tracking-tight">{APP_NAME}</h1>
        </div>
        
        {user ? (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
                {user.picture ? (
                    <img src={user.picture} alt={user.username} className="h-6 w-6 rounded-full" />
                ) : (
                    <UserIcon className="h-5 w-5 text-indigo-400" />
                )}
                <span>{user.username}</span>
            </div>
            <button 
              onClick={onLogout}
              className="inline-flex items-center justify-center h-9 w-9 text-sm font-medium text-indigo-300 bg-white/5 border border-indigo-500/20 rounded-full hover:bg-indigo-500/20 transition-colors"
              title="Logout"
            >
              <LogOutIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <button
              onClick={onLoginClick}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-300 bg-white/5 border border-indigo-500/20 rounded-md hover:bg-indigo-500/10 transition-colors"
            >
              Sign in
            </button>
            <button
              onClick={onSignupClick}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 transition-colors"
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;