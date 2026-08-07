import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTopOnRoute } from './components/utils/ScrollToTopOnRoute.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <App />
    </BrowserRouter>
  </StrictMode>
);
