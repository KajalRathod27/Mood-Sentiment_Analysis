import React from "react";

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <h3>{song.track_name}</h3>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <button onClick={() => window.open(song.spotify_uri, "_blank")}>
          Play on Spotify
        </button>
      </div>
    </div>
  );
};

export default SongCard;
