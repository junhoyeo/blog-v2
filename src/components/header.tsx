import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 386px;
  background: linear-gradient(to right, #ffd43b, #fcc419, #fab005, #f59f00, #f59f00);

  @media (max-width: 795px) {
    height: 486px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 1rem;
  max-width: 960px;
  flex-grow: 1;
  background-image: url(/header-illust.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;

  @media (max-width: 845px) {
    background-position-x: calc(100% + 50px);
  }

  /* @media (max-width: 795px) {
    background-position-y: -30px;
  }

  @media (max-width: 770px) {
    background-position-y: -80px;
  } */

  @media (max-width: 795px) {
    background-size: contain;
    background-position: center;
  }
`;

const IndexLink = styled(props => <Link {...props} />)`
`;

const Brand = styled.span`
  background-color: #000;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  padding-left: calc(1rem + 5px);
  letter-spacing: 5px;
  font-weight: 500;
  color: white;
  font-family: 'VT323', monospace;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 1rem;
  font-size: 48px;
  line-height: 1.3;
  background: linear-gradient(to right bottom, #868e96 1%, #343a40 5%, #000);
  color:transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 845px) {
    font-size: 36px;
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <IndexLink to="/">
        <Brand>JUNHOYEO.GITHUB.IO</Brand>
      </IndexLink>
      <Title>
        트렌디한<br />
        개발자를 꿈꾸는<br />
        여준호입니다.
      </Title>
    </Wrapper>
  </Container>
);

export default Header;
