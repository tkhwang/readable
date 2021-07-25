import React from 'react';

export const EmailLoginForm = () => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input w-full text-gray-800"
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="flex justify-between">
            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            {/* <Link to="reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link> */}
          </div>
          <input
            id="password"
            type="password"
            className="form-input w-full text-gray-800"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="flex justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-600 ml-2">Keep me signed in</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
        </div>
      </div>
    </form>
  );
};
