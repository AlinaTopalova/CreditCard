import {
  ActionType,
  CardData,
  SetCardDataAction,
} from "types/types";

export const setCardData = (data: CardData): SetCardDataAction => ({
  type: ActionType.SetCardData,
  payload: data
});

