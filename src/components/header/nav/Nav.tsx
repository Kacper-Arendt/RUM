import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from "../../../models/MediaQueries";

interface IProps {
    isOpen: boolean,
    setIsOpen?: () => void,
}

const Nav = styled.nav<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${(props: IProps) => props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
  background: #f39c12;


@media${device.big} {
  height: 5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  background: #F9F7F4;
}
`;

const StyledLink = styled(Link)`
  width: 75%;
  max-width: 40rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1.2rem 2rem;
  border-bottom: black 1px solid;
  font-size: 1.5em;
  text-decoration: none;
  transition: color 0.2s linear;

  :first-of-type {
    margin-top: 7rem;
  }

  :hover {
    p {
      color: white;
    }
  }

@media${device.small} {
  font-size: 2em;
  padding: 2rem;
} @media${device.big} {
  flex-direction: column;
  width: auto;
  border: none;
  margin: .3rem;
  padding: 1.5rem;
  font-size: 1em;

  :first-of-type {
    margin-top: 0;
  }

  :hover {
    p {
      color: #f39c12;
    }
  }
}
`

const P = styled.p`
  margin-right: .5rem;
  color: black;
  white-space: nowrap;
  letter-spacing: .3rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Info = styled(P)`
  font-size: .7em;
  color: grey;
  text-transform: capitalize;
  letter-spacing: .2rem;
`

export const Navigation = (props: IProps) => {
    return (
        <Nav isOpen={props.isOpen}>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Short</P><Info>up to 100km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Medium</P><Info>up to 250km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Long</P><Info>up to 600km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Ultra</P><Info>up to 100km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Insane</P><Info>over 100km</Info></StyledLink>
        </Nav>

    )
}