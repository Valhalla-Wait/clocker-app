export const TimerProgress = ({ time, reset, pause }: { time: string, reset: boolean, pause?:boolean }) => {
    return (
        <div className="timer-group">
            {/* <div className="timer hour">
                <div className="hand"><span></span></div>
                <div className="hand"><span></span></div>
            </div> */}
            <div className={`timer minute`}>
                <div className="hand"><span className={`${reset ? '!animate-none' : pause ? '![animation-play-state:paused]' : ''}`}></span></div>
                <div className="hand">
                    {/* <span className={`${reset ? '![animation-duration:60s]' : '![animation-duration:0s]'}`}></span> */}
                    <span className={`${reset ? '!animate-none' : pause ? '![animation-play-state:paused]' : ''}`}></span>
                    </div>
            </div>
            <div className="timer second">
                <div className="hand"><span className={`${reset ? '!animate-none' : pause ? '![animation-play-state:paused]' : ''}`}></span></div>
                <div className="hand"><span className={`${reset ? '!animate-none' : pause ? '![animation-play-state:paused]' : ''}`}></span></div>
            </div>
            <div className="face">
                <p className="text-[36px] font-semibold">{time}</p>
            </div>
        </div>
    )
}