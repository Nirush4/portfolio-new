import { useState, type JSX } from 'react';
import { BackgroundAccents } from './components/BackgroundAccents';
import { Navbar } from './components/Navbar';

import { Footer } from './components/Footer';
import { translations } from './constants/translations';
import { Home } from './pages/HomePage';

const App = (): JSX.Element => {
  const [currentLang, setCurrentLang] = useState<'NO' | 'EN'>('NO');
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
        <Home lang={currentLang} t={t} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
