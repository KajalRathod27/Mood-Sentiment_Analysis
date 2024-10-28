import React, { useState } from "react";
import axios from "axios";
import SongCarousel from "./SongCarousel"; // Import the new SongCarousel component
import "./styles.css"; // Ensure to import your CSS file

const MoodInput = () => {
  const [mood, setMood] = useState("");
  const [englishSongs, setEnglishSongs] = useState([]);
  const [hindiSongs, setHindiSongs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/recommend?mood=${mood}`
      );
      // Access the songs from the response
      setEnglishSongs(response.data.english_songs);
      setHindiSongs(response.data.hindi_songs);
    } catch (error) {
      console.error("Error fetching song recommendations:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">Select your mood:</label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">--Choose Mood--</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="romantic">Romantic</option>
          <option value="workout">Workout</option>
          <option value="tired">Tired</option>
          <option value="dancing">Dancing</option>
        </select>
        <button type="submit">Get Song Recommendations</button>
      </form>

      {englishSongs.length > 0 && (
        <div>
          <h2>Recommended English Songs:</h2>
          <SongCarousel songs={englishSongs} />
        </div>
      )}

      {hindiSongs.length > 0 && (
        <div>
          <h2>Recommended Hindi Songs:</h2>
          <SongCarousel songs={hindiSongs} />
        </div>
      )}
    </div>
  );
};

export default MoodInput;
