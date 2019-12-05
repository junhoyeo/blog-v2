import React, { useEffect } from 'react';
import styled from 'styled-components';

const utterancesConfig = {
  async: true,
  crossorigin: 'anonymous',
  'issue-term': 'pathname',
  label: '💬comment',
  repo: 'junhoyeo/junhoyeo.github.io',
  src: 'https://utteranc.es/client.js',
  theme: 'github-light',
};

const UtterancesContainer = styled.div`
  div.utterances {
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid #ced4da;
    max-width: 80%;
    margin-bottom: 2rem;
  }
`;

const Utterances = () => {
  const elementRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');

    Object.keys(utterancesConfig).forEach((key: string) => {
      utterances.setAttribute(key, utterancesConfig[key]);
    });

    elementRef.current.appendChild(utterances);
  });

  return <UtterancesContainer ref={elementRef} />;
};

export default Utterances;
