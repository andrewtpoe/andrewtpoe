import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { definition as faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { definition as faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { definition as faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { definition as faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import { definition as faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';

import A from '../components/a';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto 80px auto;
`;

function Footer() {
  return (
    <Container>
      <A href="https://github.com/andrewtpoe">
        <FontAwesomeIcon icon={faGithubSquare} size="4x" aria-label="GitHub" />
      </A>
      <A href="https://www.linkedin.com/in/andrewtpoe/">
        <FontAwesomeIcon icon={faLinkedin} size="4x" aria-label="LinkedIn" />
      </A>
      <A href="https://twitter.com/andrewtpoe">
        <FontAwesomeIcon
          icon={faTwitterSquare}
          size="4x"
          aria-label="Twitter"
        />
      </A>
      <A href="mailto:andrewtpoe@gmail.com?Subject=Hello%20Andrew">
        <FontAwesomeIcon
          icon={faEnvelopeSquare}
          size="4x"
          aria-label="Send me an email"
        />
      </A>
      <A href="/files/resume.pdf" download="andrew-t-poe-resume">
        <FontAwesomeIcon
          icon={faFileDownload}
          size="4x"
          aria-label="Download my resume"
        />
      </A>
    </Container>
  );
}

export default Footer;
