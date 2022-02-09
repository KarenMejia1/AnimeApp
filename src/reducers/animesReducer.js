import { types } from "../types/types";


const initialState = {
    animes: [],
    active: null
}


export const animesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.animeActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.animeLoad:
            return {
                ...state,
                animes: [...action.payload]
            }
        case types.animeNew:
            return {
                ...state,
                animes: [action.payload, ...state.notes]
            }

            case types.animeUpdated:
                return {
                    ...state,
                    animes: state.animes.map(
                        anime => anime.id === action.payload.id
                        ? action.payload.note
                        :anime
                    )
                }
        default:
            return state;
    }
}