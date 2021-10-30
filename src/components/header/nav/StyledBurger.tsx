import React from 'react';
import styled from 'styled-components';
import {device, IsOpenInterface} from '../../../models/Models';

const StyledBurger = styled.button<IsOpenInterface>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: .35rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: #000;

    :first-child {
      transform: ${(props: IsOpenInterface) => props.isOpen ? 'rotate(45deg) ' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props: IsOpenInterface) => props.isOpen ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${(props: IsOpenInterface) => props.isOpen ? 'rotate(-45deg) ' : 'rotate(0)'};
    }
  }

@media${device.small} {
  width: 4rem;
  height: 4rem;

  div {
    width: 4rem;
    height: .4rem;
  }
} @media${device.big} {
  display: none;
}
`;


export const Burger = (props: IsOpenInterface) => {
    return (
        <StyledBurger isOpen={props.isOpen} onClick={props.setIsOpen}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}