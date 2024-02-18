interface IProduct {
  name: string;
  price: string | number;
  imgUrl: string;
  id: string | number;
  sizes: number[];
  typesDough: number[];
}

export type { IProduct };
