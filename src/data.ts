import Glass from "./assets/glass.jpg";

export type Drink = {
  id: number;
  image: string;
  title: string;
  price: string;
};

export const ginDrinks: Drink[] = [
  {
    id: 1,
    image: Glass,
    title: "The Azure Bloom",
    price: "$18",
  },
  {
    id: 2,
    image: Glass,
    title: "Gin Basil Smash",
    price: "$17",
  },
  {
    id: 3,
    image: Glass,
    title: "Elderflower Collins",
    price: "$16",
  },
  {
    id: 4,
    image: Glass,
    title: "Classic Negroni",
    price: "$18",
  },
  {
    id: 5,
    image: Glass,
    title: "Gin Basil Smash",
    price: "$17",
  },
  {
    id: 6,
    image: Glass,
    title: "The Azure Bloom",
    price: "$18",
  },
];

export const vodkaDrinks: Drink[] = [
  {
    id: 1,
    image: Glass,
    title: "Midnight Espresso",
    price: "$19",
  },
  {
    id: 2,
    image: Glass,
    title: "Belawinski Mule",
    price: "$17",
  },
  {
    id: 3,
    image: Glass,
    title: "Cosmopolitan",
    price: "$16",
  },
  {
    id: 4,
    image: Glass,
    title: "Classic Vesper",
    price: "$20",
  },
  {
    id: 5,
    image: Glass,
    title: "Midnight Espresso",
    price: "$19",
  },
  {
    id: 6,
    image: Glass,
    title: "Belawinski Mule",
    price: "$17",
  },
];
