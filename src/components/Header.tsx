import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/Logo.png"
            alt="Logo Nicky MF Tattoo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#accueil">Accueil</NavLink>
          <NavLink href="#mon-travail">Mon Travail</NavLink>
          <NavLink href="#reserver">Réserver</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button className="px-6 py-2 rounded border-2 border-red-500 text-white hover:bg-red-500/10 transition-all duration-300">
            Connexion/Inscription
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-6 py-4 space-y-4">
            <NavLink href="#accueil" mobile>Accueil</NavLink>
            <NavLink href="#mon-travail" mobile>Mon Travail</NavLink>
            <NavLink href="#reserver" mobile>Réserver</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <button className="w-full px-6 py-2 rounded border-2 border-red-500 text-white hover:bg-red-500/10 transition-all duration-300">
              Connexion/Inscription
            </button>
          </div>
        </div>
      )}
    </header>
  );
}