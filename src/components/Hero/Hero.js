import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Header from '../Header/Header';
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from './HeroElements';
import TempPortrait3 from '../../images/643tp.png';
import ScrollImg from '../../images/scroll-down.svg';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Johnny</h1>
            <h5>
              I'm a Full-Stack Developer & Tech Enthusiast from Austin, Texas
            </h5>
            <p>
              I thrive in transforming ideas into seamless digital experiences,
              bridging the gap between imagination and reality through
              innovative software solutions
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={TempPortrait3}
              alt='man-svgrepo'
              style={{ height: '435px', width: 'auto' }}
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            Scroll down
            <img src={ScrollImg} alt='scroll-down' />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
