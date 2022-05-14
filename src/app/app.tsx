import CreditCard from 'creditCard/creditCard';
import { useDispatch } from 'react-redux';
import { setCardData } from 'store/actions';
import { CardData } from 'types/types';
import { GlobalStyle, Wrap } from './app.styled';

export default function App() {
  const dispatch = useDispatch();

  const onSuccess = (cardData: CardData) => {
    if (cardData.cardNumber && cardData.cardDate && cardData.cardCVV) {
      dispatch(setCardData(cardData));
    }
    return;
  }
  
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <CreditCard onSuccess={onSuccess}/>
      </Wrap>
    </>
  );
}

