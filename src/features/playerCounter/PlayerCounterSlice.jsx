import { createSlice } from '@reduxjs/toolkit'

export const PlayerCounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        turnToZero: (state) => {
            state.value = 0
        },
    }
})

export const { increment, turnToZero } = PlayerCounterSlice.actions

export default PlayerCounterSlice.reducer