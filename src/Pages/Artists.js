import React from 'react';
import { mockArtists } from '../utils/mockData';
import './css/Artists.css';

const Artists = () => {
  return (
    <div className="artists-page">
      <h1>Artistas</h1>
      
      <div className="artists-grid">
        {mockArtists.map(artist => (
          <div key={artist.id} className="artist-card">
            <div 
              className="artist-avatar" 
              style={{ background: artist.gradient }}
            ></div>
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-listeners">{artist.listeners} oyentes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
