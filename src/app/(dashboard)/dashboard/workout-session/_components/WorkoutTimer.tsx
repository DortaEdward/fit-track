import { Play, RotateCcw, StopCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

type Props = {
    startTime: Date
}

export default function WorkoutTimer({ startTime }: Props) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastStartTimeRef = useRef<number | null>(null);

    useEffect(() => {

        if (isRunning) {
            lastStartTimeRef.current = Date.now();
            intervalRef.current = setInterval(() => {
                if (lastStartTimeRef.current !== null) {
                    const now = Date.now();
                    const elapsed = Math.floor((now - lastStartTimeRef.current) / 1000);
                    setTime(prev => prev + elapsed);
                    lastStartTimeRef.current = now; // reset for next second
                }
            }, 1000)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            lastStartTimeRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

    }, [isRunning, startTime])



    function formatedTime(seconds: number) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        if (hours > 0) {
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
        }
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }


    const toggleTimer = () => {
        setIsRunning(prev => !prev);
    }

    const resetTimer = () => {
        setIsRunning(false)
        setTime(0);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl text-center">Workout Timer</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-4xl font-black font-mono tracking-wider">{formatedTime(time)}</p>
                    <div className="flex items-center gap-2">
                        <Button size={"lg"} onClick={toggleTimer}>
                            {
                                isRunning
                                    ?
                                    <>
                                        <StopCircle className="mr-2 h-4 w-4" />
                                        Stop
                                    </>
                                    :
                                    <>
                                        <Play className="mr-2 h-4 w-4" />
                                        Start
                                    </>
                            }
                        </Button>
                        <Button variant={"outline"} onClick={resetTimer}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                        </Button>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}