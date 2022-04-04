import styled from 'styled-components';

const PrevButton = styled.button`
  position: absolute;
  top: -50px;
  left: 44%;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;

  @media (max-width: 1439px) {
    left: 43%;
  }

  @media (max-width: 1024px) {
    left: 42%;
  }

  @media (max-width: 789px) {
    left: 38%;
  }

  ::before {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    left: 0;
    background-image: url('../img/svg/sliderButton.svg');
    background-repeat: no-repeat;
  }
`

const NextButton = styled.button`
  position: absolute;
  top: -50px;
  left: 50%;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;

  @media (max-width: 1439px) {
    left: 49%;
  }

  @media (max-width: 1024px) {
    left: 50%;
  }

  @media (max-width: 789px) {
    left: 50%;
  }

  ::before {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    left: 0;
    background-image: url('../img/svg/sliderButton.svg');
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
`

export {
  PrevButton,
  NextButton
};