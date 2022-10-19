import * as C from './styled';

import React, { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { DarkModeSwitcher } from '../DarkModeSwitcher';
import Link from 'next/link';
import {
  Briefcase,
  Flask,
  House,
  PaperPlaneTilt,
  Student
} from 'phosphor-react';
import { SocialInfo } from '../SocialInfo';

export const AsideNav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const teste = () => {
    if (document.querySelector('.mainContainer') === window.event?.srcElement) {
      setMenuOpen(false);
    }
  };

  return (
    <C.Container className="mainContainer" menuOpen={menuOpen} onClick={teste}>
      <C.BurgerMenu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </C.BurgerMenu>
      <C.Switcher menuOpen={menuOpen}>
        <DarkModeSwitcher />
      </C.Switcher>
      <C.AsideMenu menuOpen={menuOpen}>
        <ul>
          <li>
            <Link href="/">
              <a href="">
                <House size={32} color={'#04BF68'} />
                <SocialInfo
                  backgroundColor="#F23827"
                  color="#FCFDFF"
                  label="Home"
                  fontSize="16px"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/experiencias'}>
              <a href="">
                <Flask size={32} color={'#04BF68'} />
                <SocialInfo
                  backgroundColor="#F23827"
                  color="#FCFDFF"
                  label="Experiências"
                  fontSize="16px"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/portfolio">
              <a href="">
                <Briefcase size={32} color={'#04BF68'} />
                <SocialInfo
                  backgroundColor="#F23827"
                  color="#FCFDFF"
                  label="Portfólio"
                  fontSize="16px"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/educacao">
              <a href="">
                <Student size={32} color={'#04BF68'} />
                <SocialInfo
                  backgroundColor="#F23827"
                  color="#FCFDFF"
                  label="Educação"
                  fontSize="16px"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contato">
              <a href="">
                <PaperPlaneTilt size={32} color={'#04BF68'} />
                <SocialInfo
                  backgroundColor="#F23827"
                  color="#FCFDFF"
                  label="Contato"
                  fontSize="16px"
                />
              </a>
            </Link>
          </li>
        </ul>
      </C.AsideMenu>
    </C.Container>
  );
};
