import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 80rem;
  margin: 5rem 0;
  padding: 0 2.5rem;

  
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`

const P = styled.p`
  line-height: 170%;
  font-size: 1.5rem;
  letter-spacing: 1.7px;

  :nth-of-type(3) {
    align-self: end;
  }
  :nth-of-type(4){
    margin-top: 10rem;
    font-size: .6rem;
  }
`

export const Home = () => {

    return (
        <StyledWrapper>
            <h3>Cześć!</h3>
            <P>
                RUM czyli Rowerowe Ultra Maratony. Od 3 lat jestem fanem ultra, postanowiłem stworzyć miejsce w sieci
                gdzie, każdy będzie miał możliwość sprawdzenia informacji na temat każdego ultra w Polsce*.
            </P>
            <P>
                Strona z każdym tygodniem będzie rozbudowana o kolejne funkcjonalności. Na początku chciałbym skupić
                się na zamieszczeniu informacji na temat rozpoczęcia zapisów i startów poszczególnych imprez.
            </P>
            <P>PozdRower, Kacper</P>
            <P>*Przynajmniej tego gravelowego</P>
        </StyledWrapper>
    )
}