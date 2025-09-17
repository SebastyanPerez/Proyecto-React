import React from 'react';
import './css/MusicPlayer.css';

const MusicPlayer = () => {
  // const { state, dispatch } = usePlayer();
  // const { currentSong, isPlaying, volume, currentTime, duration } = state;

  // const togglePlay = () => {
  //   dispatch({ type: 'TOGGLE_PLAY' });
  // };

  // const handleTimeChange = (e) => {
  //   const time = parseInt(e.target.value);
  //   dispatch({ type: 'SET_CURRENT_TIME', payload: time });
  // };

  // const handleVolumeChange = (e) => {
  //   const vol = parseFloat(e.target.value);
  //   dispatch({ type: 'SET_VOLUME', payload: vol });
  // };

  // if (!currentSong) return null;

  return (
    <div className="music-player">
      <div className="song-info">
        <div className="song-thumbnail"></div>
        <div className="song-details">
          <div className="song-name">Song Title</div>
          <div className="song-artist">Artist Name</div>
        </div>
        <div className="song-actions">
          <button><i className="far fa-heart"></i></button>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button><i className="fas fa-random"></i></button>
          <button><i className="fas fa-step-backward"></i></button>
          <button className="play-button" >
            <i className={'fas fa-play'}></i>
          </button>
          <button><i className="fas fa-step-forward"></i></button>
          <button><i className="fas fa-redo"></i></button>
        </div>
        <div className="progress-container">
          <span className="progress-time">
            0:00
          </span>
          <input
            type="range"
            min="0"
            max={100}
            value={50}
            className="progress-bar"
          />
          <span className="progress-time">
            3:30
          </span>
        </div>
      </div>

      <div className="extra-controls">
        <div className="volume-container">
          <i className="fas fa-volume-up volume-icon"></i>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={0.5}
            className="volume-bar"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
