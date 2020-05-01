import * as types from "./actionTypes";

export const updateLanguage = language => ({
  type: types.CHANGE_LANGUAGE,
  language
});
