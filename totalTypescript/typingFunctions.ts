// Typing Functions

type OnFocusChange = (v: boolean) => void;

const addListener = (onFocusChange: OnFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};
