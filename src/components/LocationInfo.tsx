import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

export default function LocationInfo() {
  return (
    <>
      <div className="flex items-center gap-3 text-gray-300 bg-[rgba(51,0,0,0.6)] px-6 py-3 rounded-lg backdrop-blur-sm">
        <MapPin className="w-5 h-5 text-red-500" />
        <span className="font-poppins">Paris (Alfortville 94), France</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300 bg-[rgba(51,0,0,0.6)] px-6 py-3 rounded-lg backdrop-blur-sm">
        <Instagram className="w-5 h-5 text-red-500" />
        <span className="font-poppins">@nickymf_tattoo</span>
      </div>
    </>
  );
}