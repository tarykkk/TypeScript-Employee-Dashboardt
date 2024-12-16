import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Employee Dashboard</h1>
      <div className="user-profile">
        <span>Muthu Admin</span>
        <img src="/assets/profile-icon.png" alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;
