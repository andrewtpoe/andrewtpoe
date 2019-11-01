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
      <A
        href="https://github.com/andrewtpoe"
        aria-label="Visit my GitHub profile"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
      </A>
      <A
        href="https://www.linkedin.com/in/andrewtpoe/"
        aria-label="Visit my LinkedIn profile"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </A>
      <A href="https://twitter.com/andrewtpoe" aria-label="Visit my Twitter">
        <FontAwesomeIcon icon={faTwitterSquare} size="4x" />
      </A>
      <A
        href="mailto:andrewtpoe@gmail.com?Subject=Hello%20Andrew"
        aria-label="Send me an email"
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" />
      </A>
      <A
        href="/files/resume.pdf"
        download="andrew-t-poe-resume"
        aria-label="Download my resume"
      >
        <FontAwesomeIcon icon={faFileDownload} size="4x" />
      </A>
    </Container>
  );
}

export default Footer;
