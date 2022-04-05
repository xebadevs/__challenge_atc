import { configureStore } from '@reduxjs/toolkit'
import countPlayers from '../features/playerCounter/PlayerCounterSlice'

export default configureStore({
  reducer: {
    counter: countPlayers
  },
})