import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 5rem;
  padding: 0 2.5rem;
  
  h3{
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const P = styled.p`
  line-height: 170%;
  font-size: 1.5rem;
  letter-spacing: 1.7px;
  
  :last-of-type{
    align-self: end;
  }
`

export const Home = () => {
    return (
        <StyledWrapper>
            <h3>Cześć!</h3>
            <P> RUM czyli Rowerowe Ultra Maratony. Od 3 lat jestem fanem ultra, postanowiłem stworzyć miejsce w
                sieci
                gdzie, każdy będzie miał możliwość sprawdzenia informacji na temat wszystkich ultra w Polsce.
                Strona z każdym tygodniem będzie rozbudowana o kolejne funkcjonalności. Na początku chciałbym skupić
                się
                na zamieszczeniu informacji na temat rozpoczęcia zapisów i startów poszczególnych imprez.
            </P>
            <P>PozdRower, Kacper</P>
        </StyledWrapper>
    )
}