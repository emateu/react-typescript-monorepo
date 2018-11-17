import find from "lodash.find";
import store from "store";
import translations, { ITranslation } from "../resources/translations";

/**
 * Find a language
 *
 * @param langId
 * @returns object
 */
export function findLang(langId: string): ITranslation {
  // TODO: should return <ITranslation | null>
  return find(translations.collection, (k) => k.id === langId) || translations.collection[0];
}

/**
 * Get languages
 *
 * @returns array
 */
export function getLangList() {
  return translations.collection;
}

/**
 * Get default lang id
 *
 * @returns string
 */
export function getDefaultLang() {
  return translations.defaultLang;
}

/**
 * Get current app lang id
 *
 * @returns string
 */
export function getCurrentLangId() {
  const language = (navigator.languages && navigator.languages[0]) || navigator.language;
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
  const lang = findLang(store.get("lang") || languageWithoutRegionCode);
  return lang ? lang.id : translations.defaultLang;
}
