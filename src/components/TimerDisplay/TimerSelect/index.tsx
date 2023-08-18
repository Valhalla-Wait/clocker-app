export const TimerSelect = () =>{
    const times = []
    for (let i = 0; i <= 60; i++) {
        times.push(i)
        
    }
    return(
        <div className="flex">
            <div className="overflow-hidden w-6 h-5 text-center">
                {times.map(t => <div className="w-20px h-20px">{t}</div>)}
            </div>
            |
            <div className="overflow-hidden w-6 h-5 text-center">
                {times.map(t => <div className="w-20px h-20px">{t}</div>)}
            </div>
            |
            <div className="overflow-hidden w-6 h-5 text-center">
                {times.map(t => <div className="w-20px h-20px">{t}</div>)}
            </div>
        </div>
    )
}