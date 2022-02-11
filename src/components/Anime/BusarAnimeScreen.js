import React, { useState } from 'react';
import { AnimeModal } from '../ui/AnimeModal';
import { AddCategory } from './BuscarAnime/AddCategory';
import { GifGrid } from './BuscarAnime/GifGrid';

export const BuscarAnimeScreen = ({defaultCategories=[]}) => {

    const [categories, setCategories] = useState(defaultCategories); 

    return (

        <div>
            <h1>BuscarAnimeScreen</h1>
            <AddCategory setCategories={setCategories} />

            <hr />

                {
                    categories.map((category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                },
                <AnimeModal/>
            

        </div>
        

    )
}