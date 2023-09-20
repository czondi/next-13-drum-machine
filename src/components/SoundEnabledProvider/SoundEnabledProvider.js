"use client";
import React from "react";

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setIsSoundEnabled] = React.useState(true);

  const toggleSoundEnabled = () => setIsSoundEnabled(!soundEnabled);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export default SoundEnabledProvider;
