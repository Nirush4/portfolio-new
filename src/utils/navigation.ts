import { type MouseEvent } from 'react';
import type { NavigateFunction } from 'react-router-dom';

interface HandleNavClickParams {
  e: MouseEvent<HTMLAnchorElement>;
  sectionId: string;
  isDetailsPage: boolean;
  navigate: NavigateFunction;
  setIsOpen?: (isOpen: boolean) => void;
}

export const handleNavClick = ({
  e,
  sectionId,
  isDetailsPage,
  navigate,
  setIsOpen,
}: HandleNavClickParams): void => {
  if (setIsOpen) {
    setIsOpen(false);
  }

  e.preventDefault();

  if (isDetailsPage) {
    navigate('/' + sectionId);
  } else {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', sectionId);
    }
  }
};
