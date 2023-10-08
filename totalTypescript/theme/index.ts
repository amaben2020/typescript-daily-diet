import { ThemeVariantsPropKeys, themeVariants } from "./theme";

const displayThemeByVariant = (variant: ThemeVariantsPropKeys) => {
  const { texture, colors } = themeVariants[variant];

  return {
    "--theme-bg": texture,
    "--theme-font": colors.font,
    "--theme-color": colors.highlight,
  };
};

console.log(displayThemeByVariant("Almond"));
