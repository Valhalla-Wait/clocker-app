export interface TimerI {
    type: TimerTypes,
    hours: UnitTimeType,
    minutes: UnitTimeType,
    seconds: UnitTimeType,
    miliseconds: UnitTimeType,
}

type UnitTimeType = null | number

export enum TimerTypes {
    seconds = "second",
    minutes = "minutes",
    hours = "hours"
}