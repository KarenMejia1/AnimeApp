import React from 'react'
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { CardAnime } from './CardAnime';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


export const InfoModalAnime = () => {

    const { data } = useFetchTopAnime();

    // const { animes} = useSelector(state => state.animes)
    // const { active } = useSelector(state => state.animes)
    // console.log(active)


    var settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
      };

    return (


        <Slider {...settings}>
                {

                    data.map(info => (
                        <CardAnime
                            key={info.id}
                            {...info} />
                    ))
                }
                
    </Slider>
        

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