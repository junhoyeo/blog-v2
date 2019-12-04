import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

import Icon from '../../static/icons/search.svg';
import Avatar from '../../static/illusts/avatar.png';
import Balloon from '../../static/illusts/balloon.png';

const Container = styled.div`
  flex-shrink: 0;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  padding-top: 3rem;
  background: radial-gradient(circle, #100E48, #0A0930);
  background-image: radial-gradient(circle, #a1c4fd 0%, #c2e9fb 100%);
  position: relative;
`;

const Content = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Illusts = () => {
  const IllustWrapper = useConstant(() => styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    filter: brightness(1.13);
  `);

  const IllustContainer = useConstant(() => styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `);

  const AvatarIllust = useConstant(() => styled.img`
    position: absolute;
    width: 158px;
    bottom: 0;
    left: 45px;
  `);

  const BalloonIllust = useConstant(() => styled.img`
    position: absolute;
    width: 96px;
    bottom: 0;
    right: 45px;
  `);

  return (
    <IllustWrapper>
      <IllustContainer>
        <AvatarIllust src={Avatar} />
        <BalloonIllust src={Balloon} />
      </IllustContainer>
    </IllustWrapper>
  );
};

const Title = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: auto;
  color: #222750;
`;

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  border: 5px solid #222750;
  color: #222750;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  background-image: url(${Icon});
  background-position: 7px center;
  background-repeat: no-repeat;
  padding-left: 2.2rem;
`;

export default () => {
  return (
    <Container>
      <Illusts />
      <Content>
        <Title to="/">
          주노 개발 블로그
        </Title>
        <Input />
      </Content>
    </Container>
  );
};
