import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: #4f629e;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className='item'>
          <a
            href='https://www.linkedin.com/in/johnnyculbreth/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://github.com/JohnnyCulbreth'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://www.instagram.com/johnnyculbreth/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
