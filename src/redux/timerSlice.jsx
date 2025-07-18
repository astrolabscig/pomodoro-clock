import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        breakLength: 5,
        sessionLength: 25,
        timeLeft: 25*60,
        timerLabel: 'Session',
        isRunning: false
    },
    reducers: {
        incrementBreak: (state)=>{
            if(state.breakLength < 60) state.breakLength++;
        },
        decrementBreak: (state)=>{
            if(state.breakLength >1) state.breakLength--;
        },
        incrementSession: (state)=>{
            if (state.sessionLength < 60){
               state.sessionLength++;
               if (!state.isRunning && state.timerLabel === 'Session'){
                state.timeLeft = state.sessionLength * 60;
               }
            }
        },
        decrementSession: (state) => {
            if (state.sessionLength > 1){
                state.sessionLength--;
                if (!state.isRunning && state.timerLabel === 'Session'){
                    state.timeLeft = state.sessionLength * 60;
                }
            }
        },
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload;
        },
        toggleRunning: (state) => {
            state.isRunning = !state.isRunning;
        },
        reset: (state) => {
            state.breakLength = 5;
            state.sessionLength = 25;
            state.timeLeft = 25*60;
            state.timerLabel = 'Session';
            state.isRunning = false;
        },
        switchLabel: (state, action) => {
            state.timerLabel = action.payload;
        }
    }
})

export const {
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    setTimeLeft,
    toggleRunning,
    reset,
    switchLabel
} = timerSlice.actions;

export default timerSlice.reducer;