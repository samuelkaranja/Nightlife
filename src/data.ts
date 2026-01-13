import Glass from "./assets/glass.jpg";

export type Drink = {
  id: number;
  image: string;
  title: string;
  price: string;
  tag: string;
};

export const ginDrinks: Drink[] = [
  {
    id: 1,
    image: Glass,
    title: "The Azure Bloom",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 2,
    image: Glass,
    title: "Gin Basil Smash",
    price: "Kshs 1500",
    tag: "Out Of Stock",
  },
  {
    id: 3,
    image: Glass,
    title: "Elderflower Collins",
    price: "Kshs 1500",
    tag: "Out Of Stock",
  },
  {
    id: 4,
    image: Glass,
    title: "Classic Negroni",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 5,
    image: Glass,
    title: "Gin Basil Smash",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 6,
    image: Glass,
    title: "The Azure Bloom",
    price: "Kshs 1500",
    tag: "Out Of Stock",
  },
];

export const vodkaDrinks: Drink[] = [
  {
    id: 1,
    image: Glass,
    title: "Midnight Espresso",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 2,
    image: Glass,
    title: "Belawinski Mule",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 3,
    image: Glass,
    title: "Cosmopolitan",
    price: "Kshs 1500",
    tag: "Out Of Stock",
  },
  {
    id: 4,
    image: Glass,
    title: "Classic Vesper",
    price: "Kshs 1500",
    tag: "In Stock",
  },
  {
    id: 5,
    image: Glass,
    title: "Midnight Espresso",
    price: "Kshs 1500",
    tag: "Out Of Stock",
  },
  {
    id: 6,
    image: Glass,
    title: "Belawinski Mule",
    price: "Kshs 1500",
    tag: "In Stock",
  },
];
