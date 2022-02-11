import React from 'react';
import { AnimeModal } from '../ui/AnimeModal';
import { InfoModalAnime } from '../Anime/InfoModalAnime';

export const PrincipalScreen = () => {

    // const {active} = useSelector(state => state.animes);
    // console.log(active)

    return (

        <div className='principal__container'>

            <div>
                
            </div>

            
            <InfoModalAnime/>
            <AnimeModal/>

        </div>


    )
}