import React from 'react';
import './css/Header.css';
import SearchBar from '../common/SearchBar';
import Avatar from '../common/Avatar';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onMenuToggle}>
        <i className="fas fa-bars"></i>
      </button>
      <SearchBar />
      <div className="user-actions">
        <button><i className="fas fa-upload"></i></button>
        <button><i className="far fa-bell"></i></button>
        <div className="user-profile">
          <Avatar size="small" />
          <span className="user-name">UsuarioEjemplo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
