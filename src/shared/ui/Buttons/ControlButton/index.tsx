import { ResetIcon } from "../../../icons/ResetIcon"
import { PauseIcon } from "../../../icons/PauseIcon"
import { PlayIcon } from "../../../icons/PlayIcon"

export enum ControlButtonTypes {
    "play",
    "pause",
    "reset"
}

const getButtonIcon = (type: ControlButtonTypes) => {
    switch (type) {
        case ControlButtonTypes.play:
            return <PlayIcon />
        case ControlButtonTypes.pause:
            return <PauseIcon />
        case ControlButtonTypes.reset:
            return <ResetIcon />
    }
}

export const ControlButton = ({ onClick, type }: { onClick: () => void, type: ControlButtonTypes }) => {



    return (
        <button onClick={onClick} className="text-white text-[24px] m-3">
            {getButtonIcon(type)}
        </button>
    )
}