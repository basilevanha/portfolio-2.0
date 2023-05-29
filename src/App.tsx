import React from 'react'
import { useEffect, useState } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setDarkMode(true);
    }
  }, []);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  const toggleLanguage = () => {
    const newLng = getLanguage().includes("fr") ? "en" : "fr";
    i18n.changeLanguage(newLng);
  };

  return (
    <div className="app">
      <h2>{t('greeting')}</h2>
      <button style={{ display: 'flex', backgroundColor: 'grey', border: '1px solid black', margin: 10, padding: 5 }} onClick={toggleLanguage}>Toggle language</button>
      <button style={{ display: 'flex', backgroundColor: 'grey', border: '1px solid black', margin: 10, padding: 5 }} onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h2>Dark mode {darkMode ? 'ON' : 'OFF'}</h2>
    </div>
  );
}

export default App;
