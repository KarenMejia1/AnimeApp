import { getTopAnime } from "./getTopAnime"


export const getAnimeById = (id = ' ')=>{
    return getTopAnime.find( anime => anime.id === id)
}