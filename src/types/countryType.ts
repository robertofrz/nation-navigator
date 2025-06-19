export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  continents: string[];
  area: number;
  population: number;
  languages: {
    [key: string]: string;
  };
  flags: {
    png: string;
    alt: string;
  };
}
