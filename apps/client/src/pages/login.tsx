import { LoginComp, LoginTemplate } from '@readable/src/features/login-feature';
import React from 'react';

const Login = () => {
  // return <LoginComp />;
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}

      {/*  Page content */}
      <main className="flex-grow">
        <LoginTemplate></LoginTemplate>
      </main>
    </div>
  );
};

export default Login;
