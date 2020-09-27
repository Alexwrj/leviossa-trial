export interface ICardParams {
  name: string;
  value: string;
}

export interface IAvailability {
  availability: boolean;
}

export interface ICard {
  id: number;
  link: string;
  code: number;
  imgUrl: string;
  availability: boolean;
  title: string;
  params: Array<ICardParams>;
  inFav: boolean;
  inComparsion: boolean;
};
