import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchBuscarAnime } from '../../../hooks/useFetchBuscarAnime';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchBuscarAnime(category);

return (
        <>
            <h3 className='card animate__animated animate__bounce'>{ category }</h3>
            
            {loading && <p className='card animate__animated animate__flash'>Loading</p>}

            
        <div className='card__containerTop'>
            {
                images.map( img => (
                    <GifGridItem
                    key={img.id} 
                    {...img}
                    />
                ))
            }
        </div>
        </>
        
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired
}