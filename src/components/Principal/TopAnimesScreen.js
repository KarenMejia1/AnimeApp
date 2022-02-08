import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { CardAnime } from '../Anime/CardAnime';
import { AnimeModal } from '../ui/AnimeModal';

export const TopAnimesScreen = () => {

    const {data, loading} = useFetchTopAnime();



    return (
        
        <div>
            <h1>TopScreen</h1>

            {loading && <p>Loading</p>}
            
            <div 
            
            className='card__containerTop'>

                {

                    data.map( info => (
                    <CardAnime
                    key={info.id}
                    {...info}/>
                    ))

                    
                    
                }
            </div>
        <AnimeModal/>


            {/* <div 
            
            className='modal__container'>
                {
                    data.map( info => (
                    <AnimeModal
                    key={info.id}
                    {...info}/>
                    ))
                    
                }
            </div> */}
        </div>


    )
}