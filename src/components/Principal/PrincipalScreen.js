import React from 'react';
import { AnimeModal } from '../ui/AnimeModal';
import { InfoModalAnime } from '../Anime/InfoModalAnime';

export const PrincipalScreen = () => {

    // const {active} = useSelector(state => state.animes);
    // console.log(active)

    return (

        <div>
            <h1>Top animes</h1>
            
            <InfoModalAnime/>
            <AnimeModal/>

        </div>


    )
}