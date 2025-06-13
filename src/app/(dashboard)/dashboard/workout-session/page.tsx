"use client"

import { ArrowLeft, Play, RotateCcw, StopCircle, Plus, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { Input } from "~/components/ui/input"

type Workout = {
    id: number,
    name: string,
    sets: number,
    reps: number,
    weight: number,
    done: boolean
}

export default function WorkoutSession() {

    const startTime = new Date();
    const currentDate = `${new Date().getMonth()}/${new Date().getDay()}/${new Date().getFullYear()}`;

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const [inputValue, setInputValue] = useState<string>("");
    const [workouts, setWorkouts] = useState<Workout[]>([]);

    function handleAddWorkout() {
        if (!inputValue) return;
        const id = workouts.length;

        setWorkouts(prev => [...prev, {
            id: id,
            name: inputValue,
            sets: 0,
            reps: 0,
            weight: 0,
            done: false
        }])

        setInputValue("");
    }

    function findWorkoutIndex(id: number) {
        return workouts.findIndex((workOut) => workOut.id === id);
    }

    function handleWorkoutUpdate(id: number, key: keyof Workout, value: any) {
        setWorkouts(prev =>
            prev.map(workout =>
                workout.id === id ? { ...workout, [key]: value } : workout
            )
        );
        console.log(workouts)
    }

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
            <section className="flex flex-col md:flex-row items-center md:justify-between gap-4 border-b pb-4">
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

            <section className="py-6 grid md:grid-cols-2 gap-4">
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
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Workout Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <p>Progress</p>
                            <p>0/0 sets</p>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full mt-2">
                            <div className="h-6 w-full rounded-full border bg-gray-200"></div>
                        </div>
                        <div className="flex items-center justify-evenly mt-6">
                            <div className="text-center">
                                <p className="font-bold text-3xl">{workouts.length}</p>
                                <p className="text-sm text-gray-400">Exercises</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-3xl">0</p>
                                <p className="text-sm text-gray-400">Total Sets</p>
                            </div>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Workout Log</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-1">
                            <Input
                                placeholder="Bicep Curl, Sit Ups..."
                                onChange={e => setInputValue(e.target.value)}
                                value={inputValue}
                            />
                            <Button className="bg-black" size={"sm"} onClick={handleAddWorkout}>
                                <Plus />
                            </Button>

                        </div>

                        <div className="w-full mt-6 py-2 rounded flex flex-col gap-4 pl-1 ">
                            {
                                workouts.length > 0
                                    ? workouts.map((workout, idx) => {
                                        return (
                                            <div key={idx}>
                                                <div className="flex items-center justify-between">
                                                    <p>{workout.name}</p>
                                                    <Button onClick={() => handleWorkoutUpdate(workout.id, "sets", workout.sets + 1)}>Add Set</Button>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-4 gap-2 text-sm font-medium text-muted-foreground">
                                                        {/* Header */}
                                                        <div>Sets</div>
                                                        <div>Reps</div>
                                                        <div>Weight (lb)</div>
                                                        <div>Done</div>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2 content-start">
                                                        <span>{workout.sets}</span>
                                                        <Input type="number" defaultValue={0} onChange={e => handleWorkoutUpdate(workout.id, "reps", e.target.value)} />
                                                        <Input type="text" placeholder="lb" onChange={e => handleWorkoutUpdate(workout.id, "weight", Number(e.target.value))} />
                                                        <Button variant={workout.done ? "default" : "outline"} size="sm" className="h-8 w-8 p-0" onClick={() => handleWorkoutUpdate(workout.id, "done", !workout.done)}>
                                                            <Check />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <div className="text-muted-foreground mt-4">
                                        <p className="text-center">No exercises added yet.</p>
                                        <p className="text-sm text-center">Add an exercise above to start logging your workout.</p>
                                    </div>
                            }
                        </div>

                    </CardContent>
                </Card>
                <Card>
                </Card>
            </section>
        </div>
    )
}