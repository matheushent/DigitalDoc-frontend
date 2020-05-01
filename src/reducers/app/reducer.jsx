import * as types from "./actionTypes";

const locale =
  localStorage.getItem("language") ||
  navigator.language ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.userLanguage ||
  "en-US";

const language =
  locale.includes("pt") || locale.includes("es")
    ? locale.substring(0, 2)
    : "en";

const initialState = {
  language
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export default appReducer;
