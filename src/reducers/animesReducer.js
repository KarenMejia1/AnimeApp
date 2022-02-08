import { types } from "../types/types";


const initialState = {
    animess: [],
    activeAnime: null
}


export const animesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.animeActive:
            return{
                ...state,
                activeAnime :{
                    ...action.payload
                }
            }
        case types.animeLoad:
            return{
                ...state,
                animess: [...action.payload]
            }
    
        default:
            return state;
    }
}