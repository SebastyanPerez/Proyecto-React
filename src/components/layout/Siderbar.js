import React from 'react';
import { NAV_ITEMS, USER_MENU } from '../../utils/constants';
import './css/Siderbar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <i className="fas fa-music"></i>
          <h1>MusicFlow</h1>
        </div>

        <div className="nav-section">
          <ul>
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <a href={item.path} className="nav-item">
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Tu biblioteca</h3>
          <ul>
            {USER_MENU.map(item => (
              <li key={item.id}>
                <a href="#" className="nav-item">
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {isOpen && <div className="overlay active" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
