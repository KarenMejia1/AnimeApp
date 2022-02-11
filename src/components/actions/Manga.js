import { types } from "../../types/types"

export const activeManga = (id, manga ) => ({
    type: types.mangaActive,
    payload: {
        id,
        ...manga
    }
})


export const SetManga = (info) =>({
    type: types.mangaLoad,
    payload: info
})