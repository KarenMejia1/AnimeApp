

export const getTopAnime = async() => {

    

        const url = `https://api.jikan.moe/v4/top/anime?limit=6`;
        const resp = await fetch(url);
        const {data} = await resp.json();
    
        const topAnime =data.map(info =>{
            return {
                id: info.mal_id,
                title: info.title,
                img: info.images.jpg.image_url,
                genre: info.genres,
                episodes: info.episodes,
                aired: info.aired,
                rating: info.rating,
                score: info.score,
                status: info.status,
                synopsis: info.synopsis,
                title_english: info.title_english,
                title_japanese: info.title_japanese,
                trailer: info.trailer.embed_url,
                trailer_img: info.trailer.images.image_url
            }
        })


        return topAnime;
    }