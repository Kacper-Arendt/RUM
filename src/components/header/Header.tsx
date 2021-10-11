import {Menu} from "./nav/Menu";
import {Search} from "./Search";
import styled from "styled-components";
import {device} from "../../models/MediaQueries";

const Section = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: end;
  padding: 2rem;
  background-color: white;

@media${device.big} {
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1rem 0 0;
  gap: 0;
}
`

export const Header = () => {
    return (
        <Section>
            <Search/>
            <Menu/>
        </Section>
    )
}