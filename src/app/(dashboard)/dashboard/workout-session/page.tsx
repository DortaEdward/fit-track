"use client"

import { ArrowLeft, Play, RotateCcw, StopCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { useEffect, useRef, useState } from "react"


type Props = {
    startTime: Date
}

const startTime = new Date();

export default function WorkoutSession() {
    // use state lib to store state
    const currentDate = `${new Date().getMonth()}/${new Date().getDay()}/${new Date().getFullYear()}`;

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const initialTime = Math.floor((Date.now() - startTime.getTime()) / 1000)
        setTime(initialTime);
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

    }, [isRunning, startTime])


    const toggleTimer = () => {
        setIsRunning(prev => !prev);
    }

    const resetTimer = () => {
        setTime(0);
        setIsRunning(true)
    }

    function formatedTime(seconds: number) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        if (hours > 0) {
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
        }
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    return (
        <div className="flex-1 p-4">
            <section className="flex flex-col md:flex-row items-center md:justify-between gap-4 border-b-2 pb-4">
                <div className="flex items-center gap-2">
                    <Link href={"/dashboard"}>
                        <ArrowLeft size={20} />
                    </Link>
                    <p className="text-lg font-bold">Workout {currentDate}</p>
                </div>
                <div>
                    <Button>
                        End Workout
                    </Button>
                </div>
            </section>
            <section className="py-6 grid md:grid-cols-2 gap-2">
                {/* Workout Timer Card */}
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
                <Card>
                </Card>
                <Card>
                </Card>
                <Card>
                </Card>
            </section>
        </div>
    )
}