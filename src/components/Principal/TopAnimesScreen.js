import React from 'react';
import { useDispatch } from 'react-redux';
import { useFetchTopAnime } from '../../hooks/useFetchTopAnime';
import { activeAnime } from '../actions/Anime';
import { uiOpenModal } from '../actions/ui';
import { CardAnime } from '../Anime/CardAnime';

export const TopAnimesScreen = ({ id, title, episodes, rating, img, synopsis }) => {

    // const dispatch = useDispatch();

    const {data, loading} = useFetchTopAnime();

    // const onClick=() =>{
    //     dispatch(uiOpenModal());

    //     dispatch(activeAnime(id, {
    //         title, episodes, img
    //     }))
    // }

    return (

        <div >
            <div>
            {

                data.map(info => (
                    <CardAnime
                        key={info.id}
                        {...info} />
                ))
            }
        </div>
        </div>
        


    )
}