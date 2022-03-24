import React from 'react';
import Navbar from '../Components/Navbar'

import Layout from '../Stylesheets/Layout.module.scss'

export default function PageLayout({ children }) {
  return <div className= {Layout.container}>
      
      { children }
  </div>;
}
