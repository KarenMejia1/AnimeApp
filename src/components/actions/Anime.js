// import { getTopAnime } from "../../helpers/getTopAnime"
import { types } from "../../types/types"



export const activeAnime = (id, info) => ({

    type: types.animeActive,
    payload: {
        id,
        ...info
    }
})

// export const startLoadingAnimes = ( id ) => {
//     return async( dispatch ) => {
        
//         const animes = await getTopAnime( id );
//         dispatch( SetAnime( animes ) );

//     }
// }


export const SetAnime = (info) =>({
    type: types.animeLoad,
    payload: info
})