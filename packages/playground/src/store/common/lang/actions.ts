import store from "store";

/*
 * interfaces
 */
export interface ISetLangAction {
  type: string;
  lang: string;
}

/*
 * action types
 */

export const SET_LANG = "SET_LANG";

/*
 * action creators
 */

export function setLang(lang: string): ISetLangAction {
  store.set("lang", lang);
  return {
    lang,
    type: SET_LANG,
  };
}
