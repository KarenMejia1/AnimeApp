import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useFetchTopManga } from '../../hooks/useFetchTopAnime';
import { CardAnime } from '../Anime/CardAnime';


export const TopManga = () => {

    const { data } = useFetchTopManga();


    var settings = {
        display: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        slidesToShow: 6,
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
        <div className='top__container mt-5'>
            <h1>Los 20 mangas mas populares</h1>
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