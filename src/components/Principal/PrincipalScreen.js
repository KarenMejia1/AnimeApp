import React from 'react';
import { AnimeModal } from '../ui/AnimeModal';
import { InfoModalAnime } from '../Anime/InfoModalAnime';

import { Banner } from './Banner';
import { TopManga } from '../Manga/TopManga';
import { Curiosidad } from './Curiosidad';
export const PrincipalScreen = () => {

    // const {active} = useSelector(state => state.animes);
    // console.log(active)

    return (

        <div className='principal__container'>

            <Banner/>

            <InfoModalAnime />

            <TopManga/>
            
            <AnimeModal />

            <Curiosidad/>

            

        </div>


    )
}