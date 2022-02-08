import React from 'react';
import { useDispatch } from 'react-redux';
import { activeAnime } from '../actions/Anime';
import { uiOpenModal } from '../actions/ui';
import { AnimeModal } from '../ui/AnimeModal';

export const CardAnime = ({id, title, episodes, rating, img, synopsis}) => {

    const dispatch = useDispatch();

    

    const onClick=() =>{
        dispatch(uiOpenModal());

        dispatch(activeAnime(id, {
            title, episodes, img
        }))
    }


    


    return (

        <>
                <div
                onClick={onClick}
                className='card__container'>
                    
                    <img src={img} alt={title} className='card__img' />

                    <div className='overlay__img'>
                        <p className='text_img'>{title}</p>
                    </div>

                </div>

                
            
        
        </>

    )
}