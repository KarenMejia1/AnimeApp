import React from 'react';
import { useDispatch } from 'react-redux';
import { activeManga } from '../actions/Manga';
import { uiOpenModal } from '../actions/ui';

export const CardManga = ({ id, title, img, vol, chap }) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
        activeManga(id, {
                title,img, vol, chap
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