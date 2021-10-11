import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {FaHome} from "react-icons/fa";

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
  font-size: 2.5rem;
  background: #f39c12;
`;

const StyledLink = styled(Link)`
  width: 60%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  letter-spacing: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  transition: color 0.2s linear;
  border-bottom: black 2px solid;
  
  :first-of-type{
    margin-top: 7rem;
  }

  p {
    margin-right: .8rem;
  }

  svg {
    font-size: 1.2em;
  }

  &:hover {
    color: white;
  }`

export const Navigation = (props: IProps) => {

    return (
        <Nav isOpen={props.isOpen}>
            <StyledLink to='/' onClick={props.setIsOpen}><p>Home </p><FaHome/></StyledLink>
        </Nav>

    )
}