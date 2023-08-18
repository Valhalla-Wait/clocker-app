export const MainLayout = ({children}:{children: React.ReactNode}) => {
    return(
        <div className='bg-slate-700 w-full grid h-screen justify-center items-center'>
            {children}
        </div>
    )
}

