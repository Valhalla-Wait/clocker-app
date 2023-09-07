export const Modal = ({children}:{children: React.ReactNode}) => {
    return(
        <div className="flex justify-center items-center h-[100vh] w-[100vw] top-0 left-0 fixed bg-[rgb(0,0,0)]/40">
            {children}
        </div>
    )
}