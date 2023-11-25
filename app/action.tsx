"use server";

import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "./interface";

export const log = console.log.bind(console);

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME}/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  log(data);

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
