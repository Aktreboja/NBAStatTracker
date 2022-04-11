import React from 'react';
import Navbar from '../Layout/Navbar'

export default function PageLayout({ children }) {
  return <div>
    <Navbar />
      { children }
  </div>;
}
