import { getDefaultLang } from "../../../services/language";
import { ISetLangAction, SET_LANG } from "./actions";

export default function(state: string = getDefaultLang() , action: ISetLangAction): string {
  switch (action.type) {
    case SET_LANG:
      return action.lang;
    default:
      return state;
  }
}
