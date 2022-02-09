import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { AnimeModal } from '../ui/AnimeModal';
import { CardAnime } from './CardAnime';

export const InfoModalAnime = () => {

    const { data } = useFetchTopAnime();

    const { animes} = useSelector(state => state.animes)
    // const { active } = useSelector(state => state.animes)
    // console.log(active)

    return (

        <div className='card__containerTop'>
                {

                    data.map(info => (
                        <CardAnime
                            key={info.id}
                            {...info} />
                    ))
                },
                

        </div>

    )
}






















// import React from 'react';
// import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
// import { AnimeModal } from '../ui/AnimeModal';
// import { CardAnime } from '../Anime/CardAnime';
// import { useSelector } from 'react-redux';

// export const InfoModalAnime = () => {

//     const { data, loading } = useFetchTopAnime();

//     return (

//         <div>
//             <h1>Top animes</h1>

//             {loading && <p>Loading</p>}

//             <div
//                 className='card__containerTop'>

//                 {/* {

//                     data.map(info => (
//                         <AnimeModal
//                             key={info.id}
//                             {...info} />
//                     ))
//                 } */}

//             </div>

//         </div>





//     )
// }