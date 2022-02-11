import React from 'react';
import { AnimeModal } from '../ui/AnimeModal';
import { InfoModalAnime } from '../Anime/InfoModalAnime';

import { Banner } from './Banner';
import { TopManga } from '../Manga/TopManga';
import { Curiosidad } from './Curiosidad';
import { Noticias } from './Noticias';
import { Footer } from './footer';
import { MangaModal } from '../ui/MangaModal';
export const PrincipalScreen = () => {

    // const {active} = useSelector(state => state.animes);
    // console.log(active)

    return (

        <div className='principal__container'>

            <Banner/>

            <InfoModalAnime />
            <AnimeModal />

            <TopManga/>
            <MangaModal/>

            <Curiosidad/>
            
            {/* <Noticias/> */}

            <Footer/>

        </div>


    )
}