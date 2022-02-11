import React from 'react'
import PropTypes from 'prop-types'
import { useFetchBuscarManga } from '../../hooks/useFetchBuscarManga';
import { GifGridItem } from '../Anime/BuscarAnime/GifGridItem';

export const GifGridManga = ({ category }) => {

    const {data:images, loading} = useFetchBuscarManga(category);

return (
        <>
            <h3 className='card animate__animated animate__bounce'>{ category }</h3>
            
            {loading && <p className='card animate__animated animate__flash'>Loading</p>}

            
        <div className='card-grid'>
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

GifGridManga.propTypes={
    category: PropTypes.string.isRequired
}