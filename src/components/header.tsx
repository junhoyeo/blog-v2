import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 1.5rem 1rem;
  max-width: 960px;
  flex-grow: 1;
`;

const IndexLink = styled(props => <Link {...props} />)`
  color: #343a40;
`;

const Title = styled.span`
  background-color: #000;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  padding-left: calc(1rem + 5px);
  letter-spacing: 5px;
  font-weight: 500;
  color: white;
  font-family: 'VT323', monospace;
`;

const Header = () => (
  <Container>
    <Wrapper>
      <IndexLink to="/">
        <Title>JUNHOYEO.GITHUB.IO</Title>
      </IndexLink>
    </Wrapper>
  </Container>
);

export default Header;
