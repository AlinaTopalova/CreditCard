import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  padding: 0 80px ;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1439px) {
    padding: 0 60px;
  }

  @media (max-width: 789px) {
    padding: 0 15px;
  }
`

export { Container };
