import React from 'react'
import { useEffect } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import Icon from './components/atoms/Icon';

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
      <Icon name='logo' />
    </div>
  );
}

export default App;
