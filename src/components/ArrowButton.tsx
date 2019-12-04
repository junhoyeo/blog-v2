import React from 'react';
import styled from 'styled-components';

import Arrow from '../../static/icons/right-arrow.svg';

interface IButtonProps {
  onClick: () => void;
  children: string | React.ReactElement | React.ReactElement[];
}

const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #1971c2;
  border: none;
  font-size: 1rem;
  transition: color 0.2s linear;
  cursor: pointer;
  width: fit-content;
  padding: 0;
  margin: 0.2rem 0;

  &:hover,
  &:active {
    color: #1864ab;
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

const ArrowButton = ({ onClick, children }: IButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Icon src={Arrow} /> {children}
    </Container>
  );
};

export default ArrowButton;
