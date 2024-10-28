import React from "react";
import MoodInput from "../src/components/MoodInput";
import "./App.css"; // optional for styling

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Sentiment-Based Song Recommendations</h1>
      </header>
      <main>
        <MoodInput />
      </main>
    </div>
  );
};

export default App;
