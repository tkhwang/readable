/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth } from '@readable/common/auth/useAuth';
import Link from 'next/link';
import React, { FunctionComponent, ReactNode } from 'react';

interface IProps {
  main: ReactNode;
}

export const Layout: FunctionComponent<IProps> = ({ main }) => {
  const { authenticated, logout } = useAuth();

  return (
    <div className="max-w-screen-2xl mx-auto text-white">
      <nav className="bg-indigo-700" style={{ height: '64px' }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img src="/images/readable-logo.svg" alt="readable home" className="inline w-6" />
            </a>
          </Link>

          {authenticated ? (
            <>
              <Link href="/bookmark/add">
                <a>Add Bookmark</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/login">
              <a>Login / Signup</a>
            </Link>
          )}
        </div>
      </nav>
      <div className="text-black">
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>{main}</main>
      </div>
    </div>
  );
};
