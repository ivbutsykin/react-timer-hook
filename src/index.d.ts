interface TimerSettings {
    autoStart?: boolean;
    expiryTimestamp: Date;
    onExpire?: () => void;
}

interface TimerResult {
    totalSeconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    isRunning: boolean;
    start: () => void;
    pause: () => void;
    resume: () => void;
    restart: (newExpiryTimestamp: Date, autoStart?: boolean) => void;
}

export function useTimer(settings: TimerSettings): TimerResult

interface StopwatchSettings {
    autoStart?: boolean;
    offsetTimestamp?: Date;
    delay?: number;
}

interface StopwatchResult {
    totalMilliseconds: number;
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    isRunning: boolean;
    start: () => void;
    pause: () => void;
    reset: (offsetTimestamp?: Date, autoStart?: boolean) => void;
}

export function useStopwatch(settings?: StopwatchSettings): StopwatchResult

interface AnimatedStopwatchSettings {
    autoStart?: boolean;
    offsetTimestamp?: Date;
}

interface AnimatedStopwatchResult {
    totalMilliseconds: number;
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    isRunning: boolean;
    start: () => void;
    pause: () => void;
    reset: (offsetTimestamp?: Date, autoStart?: boolean) => void;
}

export function useAnimatedStopwatch(settings?: AnimatedStopwatchSettings): AnimatedStopwatchResult

interface TimeSettings {
    format?: '12-hour';
}

interface TimeResult {
    seconds: number;
    minutes: number;
    hours: number;
    ampm: '' | 'pm' | 'am';
}

export function useTime(settings?: TimeSettings): TimeResult
