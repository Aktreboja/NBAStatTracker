import React from 'react';
import Navbar from '../Layout/Navbar'

export default function PageLayout({ children }) {
  return <>
    {/* Testing this for pull request */}
       <Navbar /> 
      { children }
  </>;
}
