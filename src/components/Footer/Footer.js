import React from 'react';
import styled from 'styled-components';
import footerwave from '../../images/footer_wave.svg';

const FooterSection = styled.div`
  background-image: url(${footerwave});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className='Container'>
        <span>
          Visit this repo on{' '}
          <a
            href='https://github.com/JohnnyCulbreth'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
