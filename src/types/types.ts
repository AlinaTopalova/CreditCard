export type CardData = {
  cardNumber: string,
  cardDate: string,
  cardCVV: string,
}

export type Store = {
  cardData: CardData,
}

export const enum ActionType {
  SetCardData = 'user/setCardData',
}

export type SetCardDataAction = {
  type: ActionType.SetCardData;
  payload: CardData;
}

export type Actions =
  | SetCardDataAction

