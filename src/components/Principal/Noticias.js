import React from 'react'
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { CardAnime } from '../Anime/CardAnime';

export const Noticias = () => {
    const { data } = useFetchTopAnime();

    return (
        <>
            <div>
                Noticias

                <div className='noticia_container'>
                    {

                        data.map(info => (
                            <CardAnime
                                key={info.id}
                                {...info} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}