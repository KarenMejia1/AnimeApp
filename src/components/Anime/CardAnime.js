import React from 'react';

export const CardAnime = ({title, synopsis, img}) => {
    return (

        <div>
            <h1>CardImagesAqui</h1>
            
            <div className='card__container'>

                    <img src={img} alt={title} className='card__img'/>

                    <div className='overlay__img'>
                        <p className='text_img'>{synopsis}</p>
                    </div>

                    <div>{title}</div>
            </div>

        </div>

    )
}