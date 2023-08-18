import { TimerFormates } from "../TimerConteiner/types"
import { NavigationButton } from "./NavigationButton"

export type NavElemType = {
    title: string,
    link: string,
    timerFormat: TimerFormates
}

export const navElements:NavElemType[] = [
    {
        title: 'Секундомер',
        link: '/'
        ,
        timerFormat: 'single'
    },
    {
        title: 'Таймер',
        link: '/interval',
        timerFormat: 'interval'
    },
    {
        title: 'Интервальный таймер',
        link: '/multi'
        ,
        timerFormat: 'multi'
    },
]

export const TypeNavigation = () => {
    return (
        <div className='grid-cols-3 grid gap-3'>
            {navElements.map(({ link, title }) => <NavigationButton link={link}>{title}</NavigationButton>)}
        </div>
    )
}