import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

import image from './../../src/logo.jpg';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const { t } = useTranslation();

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <img src={image} className='logo' width={45} height={45} alt="" />
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Artists</div>
        </Link>
        <Link to="/" className="ml1 no-underline black">
          {t('list')}
        </Link>        
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          {t('search')}
        </Link>
        <div className="ml1">|</div>
        <div className="flex flex-fixed">
          <div className="ml1 pointer black">
            {t('select_language')}
          </div>
          <div className="ml1 pointer black"> : </div>
          <div className="select">
            <LanguageSelect className="ml1 pointer black" />
          </div>
        </div>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              {t('submit')}
            </Link>
            <div className="ml1">|</div>
            <Link
              to="/openai"
              className="ml1 no-underline black"
            >
              OpenAI
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <Link
            className="logout session"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            {t('logout')}

          </Link>

        ) : (
          <Link
            to="/login"
            className="login session"
          >
            {t('login')}
          </Link>

        )}
      </div>
    </div >
  );
};

export default Header;
