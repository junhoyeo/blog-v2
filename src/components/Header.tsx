import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <LeftProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage
            src="https://github.com/junhoyeo.png"
          />
        </ProfileImageWrapper>
        <Information>
          <Title>
            Hello, I'm Junho Yeo
          </Title>
          <Description>
            Creating INEVITABLE™ Frontend
            <DescriptionPoint />
          </Description>
        </Information>
      </LeftProfileWrapper>
      <RightProfileWrapper>
      </RightProfileWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding-top: 45px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LeftProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #5795ED, #316FE1);
  box-shadow: 12px 12px 24px rgba(29, 72, 235, 0.15),
    -12px -12px 24px rgba(206, 216, 245, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: center;
  box-shadow: inset 6px 6px 12px #1093e0,
    inset -6px -6px 12px #14b1ff;
  filter: grayscale(1) brightness(0.95);
`;

const Information = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 2.2rem;
  color: rgba(33, 37, 41, 0.95);
`;

const Description = styled.span`
  font-weight: 500;
  color: rgba(33, 37, 41, 0.5);
  margin-top: 10px;
  font-size: 16px;
`;

const DescriptionPoint = styled.span`
  height: 9px;
  width: 9px;
  background-color: #316FE1;
  display: inline-block;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid rgba(1, 94, 158, 0.15);
`;

const RightProfileWrapper = styled.div`
`;
