import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li> Home</li>
        <li> Employees</li>
        <li> Settings</li>
      </ul>
    </nav>
  );
};

export default Sidebar;