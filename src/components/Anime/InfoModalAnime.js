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
        display: true,
        centerPadding: '60px',
        // centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='top__container'>
            <h1>Los 20 animes mas populares</h1>
            <Slider 
            {...settings}>
                {

                    data.map(info => (
                        <CardAnime
                            key={info.id}
                            {...info} />
                    ))
                }

            </Slider>
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