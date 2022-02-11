import React from 'react';
import { useDispatch } from 'react-redux';
import { activeAnime } from '../../actions/Anime';
import { uiOpenModal } from '../../actions/ui';

export const GifGridItem = ({ id, title, episodes, rating, img, synopsis, genre }) =>{

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
        activeAnime(id, {
                title, episodes, img, genre, synopsis,rating
            })
        ) 

        dispatch(uiOpenModal());
    }

    return (
    <div 
    onClick={onClick}
    className='card animate__animated animate__bounce'>
        <img src={img} alt={title}/>
        <p></p>
    </div>
    )
}
