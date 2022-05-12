import styled from 'styled-components';

const CardWrap = styled.div<{rotate: boolean}>`
  margin: 0 auto;
  width: 315px;
  height: 184px;
  padding: 30px;
  background: linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${props => props.rotate && 'rotateY(180deg)'};
  position: relative;
`

const CardFace = styled.div<{isBack?: boolean}>`
  position: absolute;
  padding: 30px;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: ${props => props.isBack && 'rotateY(180deg)'};
`

const CardNum = styled.input`
  width: 165px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: white;
`

const CardDate = styled.input`
  width: 40px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: white;
`

const CardCVV = styled.input`
  width: 40px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: white;
`

export { 
  CardWrap,
  CardFace,
  // CardFront,
  // CardBack,
  CardNum,
  CardDate,
  CardCVV
}; 
