import React from 'react';
//import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";


import { FaFacebookF } from 'react-icons/fa';
import config from '../config';

const { XURL, FacebookURL, InstagramURL, LinkedInURL, GitHubURL } = config;

const SocialMedia = () => (  
  
  <div className="app__social">    
    <div>
      <a href={LinkedInURL}>
        <FaLinkedin />
      </a>
    </div>

    <div>
      <a href={GitHubURL}>
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;