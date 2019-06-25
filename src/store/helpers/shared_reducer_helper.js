export const changeTheme = (state, theme) => {
  localStorage.setItem("theme", theme);
  state.appRoot.className = "";
  state.appRoot.classList.add(theme);
  return {
    ...state,
    theme,
  };
};