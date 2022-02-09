// import { getTopAnime } from "../../helpers/getTopAnime"
import { types } from "../../types/types"

export const startNewNote = () => {

    return async(dispatch, getState)=>{
        
        const {id} = getState().animes;

        const newAnime = {
            title: '',
            body: '',
            episodes: ''
        }

        try{
    
            dispatch(activeAnime(newAnime))
        }catch(error){
            console.log(error)
        }
    }
}



export const activeAnime = (id, anime ) => ({
    type: types.animeActive,
    payload: {
        id,
        ...anime
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