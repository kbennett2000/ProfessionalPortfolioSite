import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import config from '../config';
import { FaGithub } from "react-icons/fa";

const AppWrap = (Component, idName, classNames) => function HOC() {
  const { copyrightText01, copyrightText02, seeCodeTagline1, seeCodeTagline2, seeCodeTagline3, seeCodeURL } = config;
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">{copyrightText01}</p>
          <p className="p-text">{copyrightText02}</p>
          <p className="p-text">{seeCodeTagline1}</p>
          <p className="p-text">{seeCodeTagline2}</p>
          <a href={seeCodeURL}><p className="p-text">{seeCodeTagline3} <FaGithub /></p></a>          
        </div>
        
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;