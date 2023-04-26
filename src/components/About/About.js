import React from 'react';
import { stackList } from '../../data/ProjectData';
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from './AboutElements';
import TempPortrait2 from '../../images/643tthead.png';

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <div className='SectionTitle'>About Me</div>
        <div className='BigCard'>
          <Image src={TempPortrait2} alt='man-svgrepo' />
          <div className='AboutBio'>
            Hi! My name is <strong>Johnny Culbreth</strong> and I'm a retired
            professional cyclist who made an exciting transition into the world
            of software engineering. With a passion for continuous learning and
            a strong interest in emerging technologies, I'm always on the
            lookout for new opportunities to expand my skillset. While I'm
            proficient in both front-end and back-end development, I have a
            particular inclination towards crafting visually appealing and
            interactive user interfaces. Drawing from my unique background, I
            bring a blend of determination, creativity, and attention to detail
            to every project I undertake, always striving to create seamless and
            engaging digital experiences.
          </div>
          <div className='AboutBio tagline2'>
            Here are a few of the technologies I have become confident in using:
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className='tech'>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
