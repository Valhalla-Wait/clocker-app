// import { TimePicker } from "@mui/lab"
import { CircularProgress } from "@mui/material"
import { LocalizationProvider, MultiSectionDigitalClock, TimeClock } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { useRef, useState } from 'react'
import { TimerFormates } from "../TimerConteiner/types"
// // import {useState} from "React"

export const TimerDisplay = ({ format }: {
    format: TimerFormates
}) => {
    const [time, setTime] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [intervals, setIntervals] = useState<number[]>([])
    const [clock, setClock] = useState<Date>(() => new Date())
    const countRef = useRef(0)
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
        if (format === 'interval') countRef.current = setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)
        else countRef.current = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
    }
    const handleIntervals = () => {
        
    }

    const handleReset = () => {
        setIsActive(false)
        setIsPaused(false)
        setTime(0)
        clearInterval(countRef.current)
    }

    const handlePaused = () => {
        setIsPaused(true)
        clearInterval(countRef.current)
    }

    const handleResume = () => {
        setIsPaused(false)
        if (format === 'interval') countRef.current = setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)
        else countRef.current = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
    }
    const handleInputTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(Number(e.currentTarget.value) * 60)
    }
    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${Number(minutes) % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='grid justify-center justify-items-center'>
                {format === 'interval' && <input type="text" placeholder="input min pls" onChange={handleInputTimer} />}
                <CircularProgress variant="determinate" size={100} value={time} />
                <br />
                {formatTime()}
                <br />
                
                {(isActive && !isPaused) && <button onClick={handlePaused} className="text-white bg-blue-600 m-3 px-3">Pause</button>}
                {
                    (isActive && isPaused) && <>
                        <button onClick={handleResume} className="text-white bg-blue-600 m-3 px-3">Resume</button>
                    </>
                }
                {!isActive ? <button onClick={handleStart} className="text-white bg-blue-600 m-3 px-3">Start</button> : <button onClick={handleReset} className="text-white bg-blue-600 m-3 px-3">Reset</button>}

                {/* <TimeClock value={clock} onChange={(e)=> console.log(e?.getMinutes())}/> */}
                {/* <MultiSectionDigitalClock  disablePast value={clock} onChange={(e) => setClock(e as Date)} views={['minutes', 'seconds']} />
                {format(clock, 'mm:ss')}
                {/* <TimerSelect /> */}
            </div>
        </LocalizationProvider>

    )
}