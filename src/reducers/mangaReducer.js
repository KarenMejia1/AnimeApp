import { types } from "../types/types";


const initialState = {
    mangas: [],
    active: null
}


export const mangasReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.mangaActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.mangaLoad:
            return {
                ...state,
                animes: [...action.payload]
            }
 
        default:
            return state;
    }
}