import IMask from 'imask';
import { useEffect, useRef, useState } from 'react';
import { ChangeEvent } from 'react';
import MainContainer from '../mainContainer/mainContainer';
import  * as S from './creditCard.styled'; 


export default function CreditCard(): JSX.Element {
  const [cardNum, setCardNum] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [rotate, setRotate] = useState<boolean>(false);

  const num = useRef<HTMLInputElement | null>(null);

  const date = useRef<HTMLInputElement | null>(null);

  const cvv = useRef<HTMLInputElement | null>(null);

  const handleCardNumChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === 19) {
      setRotate(true);
      date.current?.focus();
    }
    const maskOptions = {mask: '0000 0000 0000 0000'};
    IMask(evt.currentTarget, maskOptions);
    setCardNum(evt.target.value);
  }

  const handleCardDateChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === 5) {
      cvv.current?.focus();
    }
    const maskOptions = {
      mask: Date,
      pattern: 'm/`Y',
      blocks: {
        m: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 12,
          maxLength: 2,
        },
        y: {
          mask: IMask.MaskedRange,
          from: 22,
          to: 99,
          maxLength: 2,
        }
      },
    };

    IMask(evt.currentTarget, maskOptions);
    setCardDate(evt.target.value);
  }
  
  const handleCardCVVChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === 3) {
      cvv.current?.focus();
    }
    const maskOptions = {mask: '000'};
    IMask(evt.currentTarget, maskOptions);
    setCardCVV(evt.target.value);
  }
  
  console.log('cardNum', cardNum);
  console.log('cardDate', cardDate);
  console.log('cardCVV', cardCVV);

  useEffect(() => {
    num.current?.focus();
  }, []);

  return (
    <MainContainer>
      <S.CardWrap rotate={rotate}>
        <S.CardFace>
            <S.CardNum
                ref={num}
                onChange={handleCardNumChange}
                size = {19}
                required
            />
          </S.CardFace>
          <S.CardFace isBack={true}>
          
            <S.CardDate
                ref={date}
                onChange={handleCardDateChange}
            />
            <S.CardCVV
                ref={cvv}
                onChange={handleCardCVVChange}
            />
         </S.CardFace>
      </S.CardWrap>
    </MainContainer>
  );
}
