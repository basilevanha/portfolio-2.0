// Import utils
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import styles
import './App.scss';

// Import Components
import Header from './components/organisms/Header';
import Infos from './components/organisms/Infos';
import Projects from './components/organisms/Projects';

function App() {

  // Dark Mode set up
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    isDarkMode ? document.querySelector('body')?.classList.add('dark-mode') : document.querySelector('body')?.classList.remove('dark-mode');
  }, [isDarkMode])


  // Translations set up
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
    <div className={cn('app', { 'dark-mode': isDarkMode })}>
      <div className="wrapper">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />

        <Infos isDarkMode={isDarkMode} />

        <Projects isDarkMode={isDarkMode} />

        <footer>FOOTER</footer>

      </div>
    </div>
  );
}

export default App;
