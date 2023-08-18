import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { TimerDisplay } from "../TimerDisplay"
import { navElements, TypeNavigation } from "../TypeNavigation"
import { TimerFormates } from "./types"


export const TimerConteiner = () => {
    
    return(
        <div className='grid-rows-2'>
            <TypeNavigation />
            <Routes>
                {navElements.map(({link, timerFormat}) => <Route path={link} element={<TimerDisplay format={timerFormat}/>} />)}

                {/* <Route path="/" element={<TimerDisplay format={value}/>} />
                <Route path="/interval" element={<TimerDisplay format={timerFormat}/>}/>
                <Route path="/multi" element={<TimerDisplay format={timerFormat}/>}/> */}
            </Routes>
        </div>
    )
}