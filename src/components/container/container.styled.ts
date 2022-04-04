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

  
  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 311px;
    height: 330px;
    top: 250px;
    right: -60px;
    background-image: url('../img/decor-up.png');
    background-repeat: no-repeat;

    @media (max-width: 1439px) {
      top: 250px;
      right: 0;
    }

    @media (max-width: 789px) {
      content: none;
    }
  }

  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 311px;
    height: 330px;
    top: 920px;
    left: 20px;
    background-image: url('../img/decor.png');
    background-repeat: no-repeat;

    @media (max-width: 1439px) {
      top: 920px;
      left: 20px;
    }

    @media (max-width: 1276px) {
      content: none;
    }
  }
`;

export { Container };
