export type HeaderFeedProps = {
  goToLoginPage: () => void;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
};

export function HeaderFeed({ goToLoginPage, logout, isAuthenticated, loading }: HeaderFeedProps) {
  const siteNavigation = () => {
    return (
      <nav className="flex flex-grow">
        <ul className="flex flex-grow justify-end flex-wrap items-center">
          <li>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-gray-200 text-sm bg-gray-900 hover:bg-gray-800 ml-3 px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={goToLoginPage}
                className="font-medium text-sm text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className="w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white blur shadow-lg">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-14">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <div className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          {loading ? <div>loading...</div> : siteNavigation()}
        </div>
      </div>
    </header>
  );
}

export default HeaderFeed;
