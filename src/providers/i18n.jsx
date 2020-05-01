/**

  When adding support for other languages follow these steps:

  1) import language locale from react-intl
  2) import text translations from JSON file
  3) add language locale to addLocaleData
  4) add language to array appLocales
  5) export in the same format as the others

  keywords: i18n, NewLanguage, AddLanguage, Internationalization, Locale, NewLocale
  Translation, English, Portuguese
*/

// 2)
import enTranslationMessages from "../translations/en.json";
import ptTranslationMessages from "../translations/pt.json";

// 4)
export const appLocales = ["en", "pt"];

// export const formatTranslationMessages = (locale, messages) => {
//   const defaultFormattedMessages = locale !== DEFAULT_LOCALE
//     ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
//     : {};
//   return Object.keys(messages).reduce((formattedMessages, key) => {
//     const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
//       ? defaultFormattedMessages[key]
//       : messages[key];
//     return Object.assign(formattedMessages, { [key]: formattedMessage });
//   }, {});
// };

// 5)
export const translationMessages = {
  en: enTranslationMessages,
  pt: ptTranslationMessages
};
