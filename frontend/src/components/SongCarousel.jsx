import React, { useRef } from "react";
import SongCard from "./SongCard";

const SongCarousel = ({ songs }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative" }}>
      <button className="scroll-btn left" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="carousel-container" ref={carouselRef}>
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default SongCarousel;
