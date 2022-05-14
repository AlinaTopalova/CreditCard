import styled from 'styled-components';

const CardWrap = styled.div<{isRotate: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 315px;
  height: 184px;
  padding: 25px 30px;
  background: linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%);
  border-radius: 30px;
  transition: transform 2s;
  transform-style: preserve-3d;
  transform: ${props => props.isRotate && 'rotateY(180deg)'};
  perspective: 450px;
`

const CardFace = styled.div<{isBack?: boolean}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: ${props => props.isBack && 'rotateY(180deg)'};
`

const CardLogo = styled.div<{isBack?: boolean}>`
  background-image: ${props => props.isBack ? `url('img/masterCardBack.png')`: `url('img/masterCard.png')`};
  background-repeat: no-repeat;
  width: 48px;
  height: 36px;
`

const CardNum = styled.input`
  width: 165px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: #FFFFFF;
  border: none;
  flex-grow: 1;
  align-self: flex-start;
  justify-self: flex-end;
`

const DateInput = styled.input`
  width: 17px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: #ffffff;
  border: none;
`

const FrontInputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const BackInputsWrap = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 20px 0 14px 0;
`

const BackInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

const BackInputLabel = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  opacity: 0.5;
  color: #FFFFFF;
`

const BackInput = styled.input`
  width: 46px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  background-color: rgba(0,0,0,0);
  padding: 0;
  color: #FFFFFF;
  border: none;
`

const CardChip = styled.div`
  width: 36px;
  height: 23px;
  background-image: url('img/chip.png');
  background-repeat: no-repeat;
  justify-self: flex-end;
`

const FrontDate = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
`

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

const BalanceWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const BalanceTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5;
  margin-bottom: 9px;
`

const Balance = styled.span`
  font-size: 28px;
  line-height: 33px;
  color: #FFFFFF;
`

export { 
  BackInputWrap,
  BackInputsWrap,
  BackInputLabel,
  BackInput,
  Balance,
  BalanceTitle,
  BalanceWrap,
  CardWrap,
  CardFace,
  CardLogo,
  CardNum,
  CardChip,
  DateInput,
  FrontInputsWrap,
  FrontDate,
  HeaderWrap,
}; 
