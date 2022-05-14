import { Store, Actions, ActionType } from 'types/types';

export const initialState: Store = {
  cardData: {
    cardNumber: '',
    cardDate: '',
    cardCVV: '',
  }
}

export const appReducer = (state = initialState, action: Actions): Store => {
  switch (action.type) {
    case ActionType.SetCardData:
      return {
        ...state, cardData: action.payload,
      };
    default: return state;
  }
}