import localeDataEn from "react-intl/locale-data/en";
import localeDataEs from "react-intl/locale-data/es";
import enTranslations from "./en.json";
import esTranslations from "./es.json";

/**
 * Translation Interface
 */
export interface ITranslation {
  id: string;
  title: string;
  translations: any;
}

/**
 * Locale data
 *
 * @type array
 */
const localeData = [
  ...localeDataEn,
  ...localeDataEs,
];

/**
 * Default app lang
 *
 * @type string
 */
const defaultLang = process.env.REACT_APP_LANG_DEFAULT || "en";

/**
 * Available languages
 * @type array
 */
const collection: ITranslation[] = [
  {
    id: "en",
    title: "English",
    translations: enTranslations,
  },
  {
    id: "es",
    title: "Español",
    translations: esTranslations,
  },
];

/**
 * Language configuration
 * @return object
 */
export default {
  collection,
  defaultLang,
};

export { localeData };
