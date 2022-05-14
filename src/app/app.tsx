import CreditCard from 'creditCard/creditCard';
import { state } from 'index';
import { useDispatch } from 'react-redux';
import { setCardData } from 'store/actions';
import { CardData } from 'types/types';
import { GlobalStyle, Wrap } from './app.styled';

export default function App() {
  const dispatch = useDispatch();
  console.log('state.getState()', state.getState());

  const onSuccess = (cardData: CardData) => {
    if (cardData.cardNumber && cardData.cardDate && cardData.cardCVV) {
      dispatch(setCardData(cardData));
    }
    
    console.log('state', state.getState());
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

