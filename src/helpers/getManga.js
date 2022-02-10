export const getManga = async(category) =>{

    const url = `https://api.jikan.moe/v4/manga?q=${encodeURI(category)}&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const manga = data.map(info =>{
        return {
            id: info.mal_id,
            title: info.title,
            img: info.images.jpg.large_image_url,
            genre: info.genres,
            episodes: info.episodes,
            aired: info.aired,
            rating: info.rating,
            score: info.score,
            status: info.status,
            synopsis: info.synopsis,
            title_english: info.title_english,
            title_japanese: info.title_japanese,
        }
    })

    return manga;
}