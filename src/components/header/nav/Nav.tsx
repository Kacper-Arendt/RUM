import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from "../../../models/MediaQueries";
import {IsOpenInterface} from "../../../models/Helpers";

const Nav = styled.nav<IsOpenInterface>`
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
  transform: ${(props: IsOpenInterface) => props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
  background: #f39c12;


@media${device.big} {
  position: static;
  height: 5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  background-color: transparent;
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
  font-size: 1em;
  padding: 0 1.5rem;
  margin: 0;

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

export const Navigation = (props: IsOpenInterface) => {
    return (
        <Nav isOpen={props.isOpen}>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Wszystkie</P><Info>Hulaj dusza</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>krótkie</P><Info>Do 100km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Średnie</P><Info>do 250km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Długie</P><Info>do 600km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Ultra</P><Info>do 1000km</Info></StyledLink>
            <StyledLink to='#' onClick={props.setIsOpen}><P>Szaleństwo</P><Info>ponad 1000km</Info></StyledLink>
        </Nav>

    )
}