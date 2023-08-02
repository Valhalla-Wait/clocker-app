import { createSlice } from "@reduxjs/toolkit";
import { TimerI, TimerTypes } from "./types";

const initialState:TimerI = {
    type: TimerTypes.minutes,
    hours: null,
    minutes: null,
    seconds: null,
    miliseconds: null,
}

export const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers:{

    }
})