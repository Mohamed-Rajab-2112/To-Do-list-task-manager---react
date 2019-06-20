import i18next from "i18next";
import {Subject} from 'rxjs/Subject';

export const changeLanguage = (state, lang) => {
  if (lang !== state.lang) {
    localStorage.setItem("lang", lang);
  }
  
  i18next.changeLanguage(lang);
  if (lang === "ar") {
    state.appRoot.dir = "rtl";
  } else {
    state.appRoot.dir = "ltr";
  }
  return {
    ...state,
    lang,
  };
};

export const changeTheme = (state, theme) => {
  localStorage.setItem("theme", theme);
  state.appRoot.className = "";
  state.appRoot.classList.add(theme);
  return {
    ...state,
    theme,
  };
};

export const growlMessage = new Subject();

export const setGrowlMessage = (msg) => {
  growlMessage.next(msg)
};