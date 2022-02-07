import { useEffect, useState } from "react";
import { getTopAnime } from "../helpers/getTopAnime";

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