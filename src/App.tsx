import { useState, useEffect, type JSX } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BackgroundAccents } from './components/BackgroundAccents';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { translations } from './constants/translations';
import { Home } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import {
  getStorageItem,
  setStorageItem,
} from './components/utils/localStorage';

const App = (): JSX.Element => {
  const [currentLang, setCurrentLang] = useState<'NO' | 'EN'>(() => {
    const savedLang = getStorageItem<'NO' | 'EN'>(
      'portfolio_language_mode',
      'NO'
    );
    return savedLang === 'EN' || savedLang === 'NO' ? savedLang : 'NO';
  });

  useEffect(() => {
    setStorageItem('portfolio_language_mode', currentLang);
  }, [currentLang]);

  const t = translations[currentLang];

  return (
    <div className='bg-[#282C33] text-[#CCCCCC] font-mono min-h-screen relative selection:bg-[#007ACC] selection:text-white'>
      <BackgroundAccents lang={currentLang} t={t} />
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        t={t}
      />
      <main>
        <Routes>
          <Route path='/' element={<Home lang={currentLang} t={t} />} />
          <Route
            path='/projects/:id'
            element={<ProjectDetailsPage lang={currentLang} t={t} />}
          />
        </Routes>
      </main>
      <Footer lang={currentLang} />
    </div>
  );
};

export default App;
