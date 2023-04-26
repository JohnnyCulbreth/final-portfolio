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
import TempPortrait3 from '../../images/643tt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

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
            <h1>
              Hi, I'm <span>Johnny</span>
            </h1>
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
            Scroll down{' '}
            <FontAwesomeIcon
              icon={faAnglesDown}
              style={{ marginLeft: '10px', fontSize: '1.5rem' }}
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
