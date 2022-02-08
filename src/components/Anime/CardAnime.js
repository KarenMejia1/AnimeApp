import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export const CardAnime = ({ title, img }) => {

    const dispatch = useDispatch();

    const onClick=(e) =>{
        dispatch(uiOpenModal());
    }

    return (

        <>
            {/* <h1>CardImagesAqui</h1> */}

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