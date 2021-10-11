import {FaSearch} from "react-icons/all";
import styled from "styled-components";

const StyledForm = styled.form`
  height: 3rem;
  width: 35%;
  min-width: 5rem;
  max-width: 30rem;
  display: flex;
  flex-direction: row;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  border: 1px solid orange;
  border-radius: 10rem;
  outline: none;
  cursor: pointer;
`

const Button = styled.button`
  margin-left: -2.5rem;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.5em;
  cursor: pointer;
`;

export const Search = () => {
    return (
            <StyledForm>
                <Input placeholder='Type Race Name' type="text"/>
                <Button type='submit'>
                    <FaSearch/>
                </Button>
            </StyledForm>
    )
}