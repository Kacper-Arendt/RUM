import styled from 'styled-components';
import {ReactNode} from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h2 {
    width: 100%;
    height: 4rem;
    font-size: 2rem;
    color: black;

  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`

export const Wrapper = (props: { children: ReactNode }) => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}