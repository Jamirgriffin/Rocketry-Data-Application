import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-2">
      &copy; {new Date().getFullYear()} Rocket Telemetry System. All rights reserved.
    </footer>
  );
};

export default Footer;
