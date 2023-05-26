import { useEffect } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  return (
    <div className="app">
      <h2>{t('greeting.hello')}</h2>
    </div>
  );
}

export default App;
