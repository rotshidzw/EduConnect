// src/components/Layout.js

import React from 'react';
import NavigationBar from './NavigationBar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

        <main className="flex-grow bg-gray-100 p-8">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
