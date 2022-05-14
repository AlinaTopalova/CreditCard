import { ChangeEvent, useEffect, useRef, useState } from 'react';
import IMask from 'imask';
import { 
  CVV_LENGTH,
  DATE_LENGTH,
  GENERAL_DATE_LENGTH,
  MASK_CVV,
  MASK_DATE,
  MASK_NUMBER,
  MONTH_MAX,
  MONTH_MIN,
  NUMBER_LENGTH,
  YEAR_MAX,
  YEAR_MIN
} from 'constants/constants';
import MainContainer from '../mainContainer/mainContainer';
import  * as S from './creditCard.styled';
import { CardData } from 'types/types';

type CreditCardProps = {
  onSuccess: (cardData: CardData) => void
}

export default function CreditCard(props: CreditCardProps): JSX.Element {
  const { onSuccess } = props;

  const [isRotate, setIsRotate] = useState<boolean>(false);

  const num = useRef<HTMLInputElement | null>(null);

  const date = useRef<HTMLInputElement | null>(null);

  const cvv = useRef<HTMLInputElement | null>(null);

  const handleCardNumChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === NUMBER_LENGTH) {
      date.current?.focus();
      setIsRotate(true);
    }
    IMask(evt.currentTarget, {mask: MASK_NUMBER});
  }

  const handleCardDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === GENERAL_DATE_LENGTH) {
      cvv.current?.focus();
    }
    IMask(evt.currentTarget, {
      mask: Date,
      pattern: MASK_DATE,
      blocks: {
        m: {
          mask: IMask.MaskedRange,
          from: MONTH_MIN,
          to: MONTH_MAX,
          maxLength: DATE_LENGTH,
        },
        Y: {
          mask: IMask.MaskedRange,
          from: YEAR_MIN,
          to: YEAR_MAX,
          maxLength: DATE_LENGTH,
        }
      }
    });
  }
  
  const handleCardCVVChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length === CVV_LENGTH) {
      num.current?.focus();
      setIsRotate(false);
      if (num.current && date.current && cvv.current) {
        onSuccess({
          cardNumber: num.current.value,
          cardDate: date.current.value,
          cardCVV: cvv.current.value,
        });
      } 
    }
    const maskOptions = {mask: MASK_CVV};
    IMask(evt.currentTarget, maskOptions);
  }

  useEffect(() => {
    num.current?.focus();
  }, []);

  return (
    <MainContainer>
      <S.CardWrap isRotate={isRotate}>
        <S.CardFace>
          <S.HeaderWrap>
            <S.BalanceWrap>
              <S.BalanceTitle>Current Balance</S.BalanceTitle>
              <S.Balance>$5,750,20</S.Balance>
            </S.BalanceWrap>
            <S.CardLogo></S.CardLogo>
          </S.HeaderWrap>
          <S.FrontInputsWrap>
            <S.CardNum
              ref={num}
              onChange={handleCardNumChange}
              size={19}
              required
            />
            <S.FrontDate>
              {date.current?.value ? date.current.value : '/'}
            </S.FrontDate>
          </S.FrontInputsWrap>
        </S.CardFace>
        <S.CardFace isBack={true}>
          <S.CardLogo isBack={true} />
          <S.BackInputsWrap>
            <S.BackInputWrap>
              <S.BackInputLabel>Date</S.BackInputLabel>
              <S.BackInput
                ref={date}
                onChange={handleCardDataChange}
                required
              />
            </S.BackInputWrap>
            <S.BackInputWrap>
              <S.BackInputLabel>CVV</S.BackInputLabel>
              <S.BackInput
                ref={cvv}
                onChange={handleCardCVVChange}
                required
              />
            </S.BackInputWrap>
          </S.BackInputsWrap>
          <S.CardChip />
        </S.CardFace>
      </S.CardWrap>
    </MainContainer>
  );
}
