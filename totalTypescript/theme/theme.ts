export enum ThemeVariants {
  Soya = "Soya",
  Oat = "Oat",
  Almond = "Almond",
  NotMilk = "NotMilk",
  Protein = "Protein",
  NoSugar = "NoSugar",
}

export type ThemeVariantsPropKeys = keyof typeof ThemeVariants;

export type ThemeVariantsProps = Record<
  ThemeVariantsPropKeys,
  {
    themeId: string;
    texture: string;
    colors: {
      font: string;
      highlight: string;
    };
  }
>;

export const themeVariants: ThemeVariantsProps = {
  [ThemeVariants.Soya]: {
    themeId: "soya",
    texture: "/images/textures/soya.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants.Oat]: {
    themeId: "oat",
    texture: "/images/textures/oat.jpg",
    colors: {
      font: "#001a71",
      highlight: "#b48f1c",
    },
  },
  [ThemeVariants.Almond]: {
    themeId: "almond",
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#c2883e",
      highlight: "#C2883E",
    },
  },
  [ThemeVariants.NotMilk]: {
    themeId: "not-milk",
    texture: "/images/textures/not-milk.jpg",
    colors: {
      font: "#001a71",
      highlight: "#b48f1c",
    },
  },
  [ThemeVariants.Protein]: {
    themeId: "protein",
    texture: "/images/textures/protein.jpg",
    colors: {
      font: "#001a71",
      highlight: "#061417",
    },
  },
  [ThemeVariants.NoSugar]: {
    themeId: "no-sugar",
    texture: "/images/textures/no-sugar.jpg",
    colors: {
      font: "#e94e2c",
      highlight: "#e94e2c",
    },
  },
};
