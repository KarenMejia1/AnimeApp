import React from  'react';
import { useState } from 'react';
import { AddCategory } from '../Anime/BuscarAnime/AddCategory';
import { GifGridManga } from './GifGridManga';

export const BuscarMangaScreen = ({defaultCategories=[]}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return(

        <div>
            <h1>BuscarMangaScreen</h1>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map((category =>
                        <GifGridManga
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </div>

    )
}