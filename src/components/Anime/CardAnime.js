import React from 'react';

export const CardAnime = ({ title, synopsis, img }) => {
    return (

        <>
            {/* <h1>CardImagesAqui</h1> */}

                <div className='card__container'>
                    
                    <img src={img} alt={title} className='card__img' />

                    <div className='overlay__img'>
                        <p className='text_img'>{title}</p>
                    </div>

                </div>
            

        </>

    )
}