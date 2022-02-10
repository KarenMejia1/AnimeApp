import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title, img}) =>{
    return (
    <div className='card__container'>
        <img src={img} alt={title} className='card__img'/>
        <p>{title}</p>
    </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}