import { useEffect, useState } from "react";
import { buscarAnime } from "../helpers/getAnimes";

export const useFetchBuscarAnime =(category) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        buscarAnime(category)
        .then(info =>{
            setState({
                data: info,
                loading: false
            })
        })
    },[category])
    return state;
}
