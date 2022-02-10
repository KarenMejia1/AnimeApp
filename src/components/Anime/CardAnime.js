import React from 'react';
import { useDispatch } from 'react-redux';
import { activeAnime } from '../actions/Anime';
import { uiOpenModal } from '../actions/ui';

export const CardAnime = ({ id, title, episodes, rating, img, synopsis, genre }) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
        activeAnime(id, {
                title, episodes, img, genre
            })
        ) 

        dispatch(uiOpenModal());
    }


    return (
        <div>
            <div
                onClick={onClick}
                className='card__container'>

                <img src={img} alt={title} className='card__img' />

                <div className='overlay__img'>
                    <p className='text_img'>{title}</p>
                </div>

            </div>

        </div>


    )
}