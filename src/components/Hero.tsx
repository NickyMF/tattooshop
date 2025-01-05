import React from 'react';
import LocationInfo from './LocationInfo';
import '../styles/background.css';
import '../styles/typography.css';
import '../styles/buttons.css';

export default function Hero() {
  return (
    <div className="hero-gradient">
      <div className="relative z-10 text-center space-y-5 max-w-5xl mx-auto w-full px-4">
        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight font-poppins">
          <span className="title-white">NICKY MF </span>
          <span className="title-outline">TATTOO</span>
          <span className="title-white">.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-poppins">
          Explorez l'univers de Nicky MF Tattoo, discutez et planifiez vos rendez-vous
        </p>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="neon-button font-poppins">
            S'inscrire
          </button>
          <button className="outline-button font-poppins">
            Portfolio
          </button>
        </div>

        {/* Location info container */}
        <div className="flex justify-center space-x-8">
          <LocationInfo />
        </div>
      </div>
    </div>
  );
}