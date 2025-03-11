// Import utils
import { useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

// Import Google Analytics
import TagManager from 'react-gtm-module';

// Import contexts
import { useTheme } from './context/ThemeProvider';

// Import styles
import './App.scss';

// Import Components
import Header from './components/organisms/Header';
import Infos from './components/organisms/Infos';
import Projects from './components/organisms/Projects';
import Footer from './components/organisms/Footer';

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-TT92HNHM'
  };

  TagManager.initialize(tagManagerArgs);

  const { i18n } = useTranslation();
  const { theme, updateTheme } = useTheme();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);

    // Vérifie le mode sombre du système et applique le thème
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      updateTheme('dark');
    }
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.querySelector('body')?.classList.add('dark-mode')
      : document.querySelector('body')?.classList.remove('dark-mode');
  }, [theme]);

  const toggleLanguage = () => {
    const getLanguage = () => i18n.language || window.localStorage.i18nextLng;
    const newLng = getLanguage().includes("fr") ? "en" : "fr";
    i18n.changeLanguage(newLng);
  };

  return (
      <div className={cn('app', { 'dark-mode': theme === "dark" })}>
        <div className="wrapper">
          <Header toggleLanguage={toggleLanguage} />

          <p>Thème actuel : {theme}</p>

          <Infos />

          <Projects />

          <Footer />
        </div>
      </div>
  );
}

export default App;