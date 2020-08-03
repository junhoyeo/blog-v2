import React from 'react';
import styled from 'styled-components';

interface IExperienceItem {
  name: string;
  date: string;
  position: string;
  image: string;
}

const ExperienceItem: React.FC<IExperienceItem> = ({
  name,
  date,
  position,
  image,
}) => {
  return (
    <Container>
      <BrandImage
        src={image}
      />
      <Information>
        <Title>
          {name}
          <small>
            {date}
          </small>
        </Title>
        <Position>
          {position}
        </Position>
      </Information>
    </Container>
  );
};

export default ExperienceItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  background: linear-gradient(to bottom, rgb(228,229,232), white);
  border-radius: 18px;
  padding: 18px;
  margin-right: 15px;
  width: 50%;
`;

const BrandImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 18px;
  background: #33383D;
  box-shadow: 6px 6px 14px rgba(29, 72, 235, 0.1),
  -6px -6px 14px rgba(206, 216, 245, 0.25);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  color: rgba(33, 37, 41, 0.95);

  small {
    color: rgba(49, 111, 225, 0.65);
    margin-left: 9px;
    font-size: 15px;
    font-weight: 600;
  }
`;

const Position = styled.span`
  font-size: 14px;
  color: rgba(33, 37, 41, 0.8);
`;
