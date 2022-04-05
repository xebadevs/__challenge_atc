import { createSlice } from '@reduxjs/toolkit'

export const PlayerCounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
})

export const { increment } = PlayerCounterSlice.actions

export default PlayerCounterSlice.reducer