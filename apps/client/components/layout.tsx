/* eslint-disable jsx-a11y/anchor-is-valid */
import { loadAuthToken, logout } from '@readable/common/auth';
import Link from 'next/link';
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

interface IProps {
  main: ReactNode;
}

export const Layout: FunctionComponent<IProps> = ({ main }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = loadAuthToken();

    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto text-white">
      <nav className="bg-indigo-800" style={{ height: '64px' }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img src="/images/readable-logo.svg" alt="readable home" className="inline w-6" />
            </a>
          </Link>

          {isLoggedIn ? (
            <>
              <Link href="/bookmark/add">
                <a>Add Bookmark</a>
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <a>Login/Singup</a>
            </Link>
          )}
        </div>
      </nav>
      <main style={{ minHeight: 'calc(100vh - 64px)' }}>{main}</main>
    </div>
  );
};
