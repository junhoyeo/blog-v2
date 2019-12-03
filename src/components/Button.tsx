import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  onClick: () => void;
  children: React.ReactChild;
}

const Button = ({ onClick, children }: IButtonProps) => {
  const Container = styled.button`
    background-color: #343a40;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    transition: color 0.2s linear;
    cursor: pointer;

    &:hover,
    &:active {
      color: #212529;
    }

    &:focus {
      outline: none;
    }
  `;

  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
