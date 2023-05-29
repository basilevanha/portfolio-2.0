import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import styles
import './App.scss';

// Import Components
import DarkModeToggle from './components/molecules/DarkModeToggle';
import LanguageToggle from './components/molecules/LanguageToggle';

// Import utils
import cn from 'classnames';

function App() {

  // Dark Mode
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


  // Translations
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
    <div className={cn('app', { 'dark-mode': darkMode })}>
      <nav className='navigation'>
        <DarkModeToggle onClick={toggleDarkMode} isDarkMode={darkMode} />
        <LanguageToggle onClick={toggleLanguage} isDarkMode={darkMode} />
      </nav>
      <h1>{t('greeting')}</h1>
    </div>
  );
}

export default App;
