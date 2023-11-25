export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  url: string;
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface AnimeCardProp {
  anime: AnimeProp;
  index: number;
}
