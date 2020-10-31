export class ProductModel {
  public iphones: Iphone[];
}

export interface Iphone {
  name: string;
  img: string;
  colors: Color[];
  price: string;
  screen: Screen[];
  body: string;
  kamere: Camera[];
  lock: string;
  chip: Chip[];
}

export interface Color {
  name: string;
  href: string;
}

export interface Screen {
  size: string;
  desc: string;
}

export interface Camera {
  type: string;
  desc: string;
}

export interface Chip {
  type: string;
  desc: string;
}
