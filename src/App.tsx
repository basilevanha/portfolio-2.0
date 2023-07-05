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
import Footer from './components/organisms/Footer';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    isDarkMode ? document.querySelector('body')?.classList.add('dark-mode') : document.querySelector('body')?.classList.remove('dark-mode');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  const toggleLanguage = () => {
    const getLanguage = () => i18n.language || window.localStorage.i18nextLng;
    const newLng = getLanguage().includes("fr") ? "en" : "fr";
    i18n.changeLanguage(newLng);
  };

  return (
    <div className={cn('app', { 'dark-mode': isDarkMode })}>
      <div className="wrapper">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />

        <Infos isDarkMode={isDarkMode} />

        <Projects isDarkMode={isDarkMode} />

        <Footer isDarkMode={isDarkMode} />

      </div>
    </div>
  );
}

export default App;
