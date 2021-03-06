import React from 'react';
import { useDispatch } from 'react-redux';
import { activeAnime } from '../actions/Anime';
import { uiOpenModal } from '../actions/ui';

export const CardAnime = ({ id, title, episodes, rating, img, synopsis, vol}) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
        activeAnime(id, {
                title, episodes, img, rating, synopsis, vol
            })
        ) 

        dispatch(uiOpenModal());
    }


    return (
            <div
                onClick={onClick}
                className='card__container'>

                <img src={img} alt={title} className='card__img' />


        </div>


    )
}