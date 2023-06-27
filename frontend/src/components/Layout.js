// src/components/Layout.js

import React from 'react';
import NavigationBar from './NavigationBar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
   <div>
      <NavigationBar />

        <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
