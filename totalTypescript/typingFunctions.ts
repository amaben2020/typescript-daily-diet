// Typing Functions

type OnFocusChange = (isFocused: boolean) => void;

const addListener = (onFocusChange: OnFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};