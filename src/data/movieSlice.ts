import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Episode} from "../__generated__/graphql"

export interface watchListType {
  watchList: Episode[]
}

const initialState: watchListType = {
  watchList: []
}


export const movieSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addTowatchList: (state, action: PayloadAction<Episode>) => {
      const existInWatchList=state.watchList.find((movie)=> movie.id===action.payload.id)
         if(existInWatchList){
          return;
       }
          state.watchList.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTowatchList } = movieSlice.actions

export default movieSlice.reducer