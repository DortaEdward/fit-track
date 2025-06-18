import type { Exercise } from "@prisma/client";
import { Check, Plus } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

type ExerciseType = Omit<Exercise, "id" | "workoutPlanId" | "workoutSessionId"> & {
    id: string; // UI-only identifier
};

type Props = {
    workouts: ExerciseType[];
    setWorkouts: Dispatch<SetStateAction<ExerciseType[]>>
    workoutType: string;
    setWorkoutType: Dispatch<SetStateAction<string>>
}

export default function WorkoutLog({
    workouts,
    setWorkouts,
    workoutType,
    setWorkoutType
}: Props) {
    const [inputValue, setInputValue] = useState<string>("");


    function handleAddWorkout() {
        if (!inputValue) return;
        const id = workouts.length;

        setWorkouts(prev => [...prev, {
            id: crypto.randomUUID(),
            name: inputValue,
            sets: 0,
            reps: 0,
            weight: 0,
            complete: false
        }])

        setInputValue("");
    }

    function handleWorkoutUpdate(id: string, key: keyof ExerciseType, value: any) {
        setWorkouts(prev =>
            prev.map(workout =>
                workout.id === id ? { ...workout, [key]: value } : workout
            )
        );
    }

    return (
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
                <div className="flex gap-1 my-2">
                    {/* type WorkoutType = "Upper body" | "Lower body" | "Core" */}
                    <Select value={workoutType} onValueChange={setWorkoutType}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Workout Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="upperBody">Upper Body</SelectItem>
                            <SelectItem value="lowerBody">Lower Body</SelectItem>
                            <SelectItem value="core">Core</SelectItem>
                            <SelectItem value="fullBody">Full Body</SelectItem>
                        </SelectContent>
                    </Select>
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
                                                <div>Sets</div>
                                                <div>Reps</div>
                                                <div>Weight (lb)</div>
                                                <div>Done</div>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2 content-start">
                                                <span>{workout.sets}</span>
                                                <Input type="number" defaultValue={0} onChange={e => handleWorkoutUpdate(workout.id, "reps", Number(e.target.value))} />
                                                <Input type="text" placeholder="lb" onChange={e => handleWorkoutUpdate(workout.id, "weight", Number(e.target.value))} />
                                                <Button variant={workout.complete ? "default" : "outline"} size="sm" className="h-8 w-8 p-0" onClick={() => handleWorkoutUpdate(workout.id, "complete", !workout.complete)}>
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
    )
}