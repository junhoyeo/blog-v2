import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 386px;
  background: linear-gradient(to right, #ffd43b, #fcc419, #fab005, #f59f00, #f59f00);

  @media (max-width: 600px) {
    height: fit-content;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 1rem;
  max-width: 960px;
  flex-grow: 1;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: contain;
  height: 100%;

  @media (max-width: 896px) {
    height: 25rem;
    top: unset;
  }

  @media (max-width: 822px) {
    height: 23rem;
    top: unset;
  }

  @media (max-width: 780px) {
    height: 20rem;
    top: 0;
    bottom: unset;
  }

  @media (max-width: 694px) {
    height: 20rem;
    top: -20px;
    bottom: unset;
  }

  @media (max-width: 600px) {
    position: unset;
    top: 0;
    left: 0;
    width: 100%;
    bottom: unset;
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

  @media (max-width: 896px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    position: unset;
    margin: 0;
    margin-top: -30px;
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <IndexLink to="/">
        <Brand>JUNHOYEO.GITHUB.IO</Brand>
      </IndexLink>
      <Image src={'/header-illust.png'} />
      <Title>
        트렌디한<br />
        개발자를 꿈꾸는<br />
        여준호입니다.
      </Title>
    </Wrapper>
  </Container>
);

export default Header;
