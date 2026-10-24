
import React from "react";

export default function Hero({ onExplore }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">YOUR STYLE. YOUR RULES.</span>

        <h1>
          STYLE
          <span className="hero-highlight">CHECK.</span>
          <br />
          YOUR NEXT FIT
          <br />
          STARTS HERE.
        </h1>

        <p>
          Discover standout streetwear, explore your next favorite pieces,
          and compare your finds in one place.
        </p>

        <button
          type="button"
          className="primary-button hero-button"
          onClick={onExplore}
        >
          Explore Collection <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85"
          alt="Streetwear fashion inspiration"
          className="hero-fashion-image"
        />

        <div className="hero-image-label">
          <span>THE STREETWEAR EDIT</span>
          <strong>Find your fit.</strong>
        </div>

        <div className="hero-image-number">CC / 001</div>
      </div>
    </section>
  );
}
