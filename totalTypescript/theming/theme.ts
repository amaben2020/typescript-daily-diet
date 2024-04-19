import { Badge, BadgeVariants } from '.';

const renderTheme = (variant: Badge) => {
  const { font, color, background } = BadgeVariants[variant];

  return {
    '--font': font,
    '--color': color,
    '--background': background,
  };
};

const items = {
  resolve: 'success',
};

console.log(renderTheme(items.resolve as Badge));

const searchedCity = [
  {
    country: 'Chile',
    geonameid: 3874119,
    name: 'Quillota',
    subcountry: 'Valpara\u00edso',
  },
  {
    country: 'Chile',
    geonameid: 3874787,
    name: 'Punta Arenas',
    subcountry: 'Magallanes',
  },
  {
    country: 'Chile',
    geonameid: 3874930,
    name: 'Puerto Varas',
    subcountry: 'Los Lagos',
  },
  {
    country: 'Ivory Coast',
    geonameid: 2289887,
    name: 'Divo',
    subcountry: 'Sud-Bandama',
  },
  {
    country: 'Switzerland',
    geonameid: 6295512,
    name: 'Z\u00fcrich (Kreis 9) / Albisrieden',
    subcountry: 'Zurich',
  },
];

const handleSearch = (searchTerm: string) => {
  const selectedCity = searchedCity.filter((city) => {
    if (
      city.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    ) {
      return true;
    } else {
      return false;
    }
  });
  return selectedCity.map((city) => `${city.name} , ${city.country}`);
};
console.log(handleSearch('p'));
