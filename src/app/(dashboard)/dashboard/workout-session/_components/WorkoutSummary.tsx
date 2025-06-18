import type { Exercise } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type ExerciseType = Omit<Exercise, "id" | "workoutPlanId" | "workoutSessionId">;
type Props = {
    workouts: ExerciseType[]
}


export default function WorkoutSummary({ workouts }: Props) {

    function getTotalSets() {
        let returnValue = 0;

        for (let i = 0; i < workouts.length; i++) {
            returnValue += workouts[i]?.sets!
        }
        return returnValue
    }

    function getCompletedSets() {
        let returnValue = 0;

        for (let i = 0; i < workouts.length; i++) {
            if (workouts[i]?.complete) {
                returnValue += workouts[i]?.sets!
            }
        }
        return returnValue
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl text-center">Workout Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <p>Progress</p>
                    <p>{getCompletedSets()}/{getTotalSets()} sets</p>
                </div>
                {/* Progress Bar */}
                <div className="w-full mt-2">
                    <div className="h-6 w-full rounded-full border bg-gray-200 overflow-hidden relative">
                        <div className={`bg-red-500 h-full absolute top-0 left-0`}
                            style={
                                {
                                    width: `${(getCompletedSets() / getTotalSets()) * 100}%`
                                }
                            }>

                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-evenly mt-6">
                    <div className="text-center">
                        <p className="font-bold text-3xl">{workouts.length}</p>
                        <p className="text-sm text-gray-400">Exercises</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-3xl">{getTotalSets()}</p>
                        <p className="text-sm text-gray-400">Total Sets</p>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}