"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { useState } from "react"

import WorkoutTimer from "./_components/WorkoutTimer"
import RestTimer from "./_components/RestTimer"
import WorkoutLog from "./_components/workoutLog"
import WorkoutSummary from "./_components/WorkoutSummary"
import { createWorkoutSession } from "~/app/actions/workouts.actions"
import type { Exercise } from "@prisma/client"

type ExerciseType = Omit<Exercise, "id" | "workoutPlanId" | "workoutSessionId"> & {
    id: string;
};

export default function WorkoutSessionPage() {

    const startTime = new Date();
    const currentDate = startTime.toLocaleDateString();
    const [workouts, setWorkouts] = useState<ExerciseType[]>([]);
    const [workoutType, setWorkoutType] = useState("");

    async function handleCreateSession() {
        if (!workouts || !workoutType) return;

        setWorkouts(workouts.filter(workout => workout.complete))

        const session = await createWorkoutSession({
            type: workoutType,
            durationMin: 45,
            date: new Date(),
            exercises: workouts.map(w => ({
                name: w.name,
                sets: w.sets,
                reps: w.reps,
                weight: w.weight,
                complete: w.complete,
            }))
        });

        console.log("Created Session: ", session)
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
                    <Button onClick={handleCreateSession}>
                        End Workout
                    </Button>
                </div>
            </section>

            <section className="py-6 grid md:grid-cols-2 gap-4">
                <WorkoutTimer startTime={startTime} />
                <WorkoutSummary workouts={workouts} />
                <RestTimer />
                <WorkoutLog workouts={workouts} setWorkouts={setWorkouts} workoutType={workoutType} setWorkoutType={setWorkoutType} />
            </section>
        </div>
    )
}