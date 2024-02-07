'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

interface Props {
  page?: number;
  limit?: number;
  order?: string;
}

export const fetchAnime = async ({
  page = 1,
  limit = 8,
  order = 'popularity',
}) => {
  const response = await fetch(
    `${process.env.ANIME_API_URL}/api/animes?page=${page}&limit=${limit}&order=${order}`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};
