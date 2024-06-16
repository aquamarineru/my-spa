import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setLanguage } from '../store/languageSlice';
import Watch from '../Watch/Watch';
import "./Header.scss";

const Header: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language);
  console.log('Current language:', language);
  const dispatch = useDispatch<AppDispatch>();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected language:', event.target.value);
    dispatch(setLanguage(event.target.value as 'en' | 'ru'));
  };

  return (
    <header className="header">
      <img src="src/assets/logo.png" alt="Logo" className="headerImg" />
      <div className="headerContent">
        <select value={language} onChange={handleLanguageChange} className="headerLanguage">
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        <Watch />
      </div>
    </header>
  );
};

export default Header;
