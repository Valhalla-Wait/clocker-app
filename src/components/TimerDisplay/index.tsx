import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { useEffect, useRef, useState } from 'react'
import { Modal } from "../../shared/ui/Modal"
import { TimerFormates } from "../TimerConteiner/types"
import { TimerProgress } from "./TimerProgress"
import { ControlButton, ControlButtonTypes } from "../../shared/ui/Buttons/ControlButton"

type IntervalType = {
    id: number
    time: number
    isPassed: boolean
}

export const TimerDisplay = ({ format }: {
    format: TimerFormates
}) => {
    const [time, setTime] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [intervals, setIntervals] = useState<IntervalType[]>([])
    const [intervalValue, setIntervalValue] = useState<number | null>(null)
    const [currentInterval, setCurrentInterval] = useState<IntervalType | null>(null)
    const [showModal, setShowModal] = useState(false)
    const countRef = useRef(0)

    useEffect(() => {
        if (format === 'multi' && intervals.length && time === 0 && currentInterval) {
            const nextInterval = intervals.find(interval => interval.id === currentInterval.id + 1)
            if (!nextInterval) return handleReset()
            setIntervals(prev => {
                const prevIntervalIndex = prev.findIndex(i => i.id === currentInterval.id)
                const copy = [...prev]
                copy[prevIntervalIndex].isPassed = true
                return copy
            })
            console.log(nextInterval)
            debugger
            if (nextInterval) {
                setCurrentInterval(nextInterval)
                setTime(nextInterval.time)
            }
        }
    }, [time])

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
        if (format === 'interval') countRef.current = setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)
        else if (format === 'multi' && intervals.length) {
            setCurrentInterval(intervals[0])
            setTime(intervals[0].time)
            countRef.current = setInterval(() => setTime((time) => time - 1), 1000)
        }
        else countRef.current = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
    }
    const handleIntervals = (e: React.ChangeEvent<HTMLInputElement>) => {
        const intervalTimeValue = Number(e.currentTarget.value)
        if (intervalTimeValue) {
            setIntervalValue(intervalTimeValue)
        }
    }

    const addInterval = () => {
        if (intervalValue) return setIntervals(prev => [...prev, {
            id: prev.length,
            time: intervalValue * 60,
            isPassed: false
        }])
    }

    const handleReset = () => {
        setIsActive(false)
        setIsPaused(false)
        setIntervals(prev => [...prev].map(i => ({ ...i, isPassed: false })))
        setCurrentInterval(null)
        setTime(0)
        clearInterval(countRef.current)
    }

    const handlePaused = () => {
        setIsPaused(true)
        clearInterval(countRef.current)
    }

    const handleResume = () => {
        setIsPaused(false)
        if (format === 'interval' || format === 'multi') countRef.current = setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)
        else countRef.current = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)
    }
    const handleInputTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(Number(e.currentTarget.value) * 60)
    }
    const formatTime = (seconds?: number) => {
        const secs = seconds ? seconds : time

        const getSeconds = `0${(secs % 60)}`.slice(-2)
        const minutes = `${Math.floor(secs / 60)}`
        const getMinutes = `0${Number(minutes) % 60}`.slice(-2)
        const getHours = `0${Math.floor(secs / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='grid justify-center justify-items-center'>
                {showModal && <Modal>Hello</Modal>}

                {format === 'interval' && <input type="text" placeholder="input min pls" onChange={handleInputTimer} />}

                {format === 'multi' &&
                    <>
                        <input type="text" placeholder="add interval" onChange={handleIntervals} />
                        <button onClick={addInterval}>Add</button>
                        <div>
                            Intervals:
                            {intervals.map(i => <div className="grid justify-between">{formatTime(i.time)} {i.isPassed && "X"}</div>)}
                        </div>
                    </>
                }
                
                <br />

                <TimerProgress reset={!isActive} pause={isPaused} time={formatTime()} />

                <br />

                {(isActive && !isPaused) && <ControlButton onClick={handlePaused} type={ControlButtonTypes.pause} />
                }
                {
                    (isActive && isPaused) &&
                    <ControlButton onClick={handleStart} type={ControlButtonTypes.play} />
                }
                {
                    !isActive ?
                        <ControlButton onClick={handleStart} type={ControlButtonTypes.play} />
                        :
                        <ControlButton onClick={handleReset} type={ControlButtonTypes.reset} />
                }

                {/* <TimeClock value={clock} onChange={(e)=> console.log(e?.getMinutes())}/> */}
                {/* <MultiSectionDigitalClock  disablePast value={clock} onChange={(e) => setClock(e as Date)} views={['minutes', 'seconds']} />
                {format(clock, 'mm:ss')}
                {/* <TimerSelect /> */}
            </div>
        </LocalizationProvider>

    )
}