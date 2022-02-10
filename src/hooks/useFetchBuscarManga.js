import { useEffect, useState } from "react";
import { getManga } from "../helpers/getManga";

export const useFetchBuscarManga =(category) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getManga(category)
        .then(info =>{
            setState({
                data: info,
                loading: false
            })
        })
    },[category])
    return state;
}
