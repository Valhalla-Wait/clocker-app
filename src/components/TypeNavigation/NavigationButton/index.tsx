import React from "react"
import { NavLink } from "react-router-dom"

export const NavigationButton = ({ link, children }: {
    children: React.ReactNode,
    link: string
}) => {
    return (
        <NavLink to={link} className={({ isActive }) => `w-full text-white rounded-lg ${isActive && 'bg-slate-600'} ease-linear duration-300 p-3 text-center`}>
            {children}
        </NavLink>
    )
}