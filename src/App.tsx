import { useEffect, type JSX } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { BackgroundAccents } from './components/BackgroundAccents';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { translations } from './constants/translations';
import { Home } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getStorageItem, setStorageItem } from './utils/localStorage';

const App = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const langParam = searchParams.get('lang')?.toUpperCase();
  const currentLang: 'NO' | 'EN' =
    langParam === 'EN' || langParam === 'NO'
      ? langParam
      : getStorageItem<'NO' | 'EN'>('portfolio_language_mode', 'NO');

  const handleLanguageChange = (newLang: 'NO' | 'EN') => {
    setStorageItem('portfolio_language_mode', newLang);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('lang', newLang.toLowerCase());
    setSearchParams(nextParams, { replace: true });
  };

  useEffect(() => {
    setStorageItem('portfolio_language_mode', currentLang);

    if (langParam !== currentLang) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('lang', currentLang.toLowerCase());
      setSearchParams(nextParams, { replace: true });
    }
  }, [currentLang, langParam, searchParams, setSearchParams]);

  const t = translations[currentLang];

  return (
    <div className='bg-[#F4F5F7] font-mono min-h-screen relative selection:bg-[#007ACC] selection:text-white'>
      <BackgroundAccents lang={currentLang} t={t} />
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />
      <main>
        <Routes>
          <Route path='/' element={<Home lang={currentLang} t={t} />} />
          <Route
            path='/projects/:id'
            element={<ProjectDetailsPage lang={currentLang} t={t} />}
          />
          <Route
            path='/projects'
            element={<Navigate to={`/${location.search}`} replace />}
          />
          <Route
            path='/projects/*'
            element={<Navigate to={`/${location.search}`} replace />}
          />
          <Route path='*' element={<NotFoundPage lang={currentLang} t={t} />} />
        </Routes>
      </main>
      <Footer lang={currentLang} />
    </div>
  );
};

export default App;
