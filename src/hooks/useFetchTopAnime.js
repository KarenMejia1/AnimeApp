import { useEffect, useState } from "react";
import { getTopAnime, getTopManga } from "../helpers/getTopAnime";

export const useFetchTopAnime =() =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getTopAnime()
        .then(info =>{
            setState({
                data: info,
                loading: false
            })
        })
    },[])
    return state;
}

export const useFetchTopManga =() =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getTopManga()
        .then(info =>{
            setState({
                data: info,
                loading: false
            })
        })
    },[])
    return state;
}

