import { Calendar, Activity, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent } from "~/components/ui/tabs";
import WorkoutCard from "./WorkoutCard";
import { Progress } from "~/components/ui/progress";

type OverviewTabProps = {
    stats: {
    }
}

export default function OverviewTab() {

    const tempState = {
        weeklyGoals: {
            totalAmountOfWorkout: 5,
            completedAmountOfWorkouts: 3
        },
        totalMonthWorkouts: 25,
        previousMonthWorkouts: 22,
        checkInCount: 7,
        longestStreak: 14,
        workoutStas: {
            targetDuration: 60,
            durationsPerWorkout: [
                40, 20, 60, 30, 70, 50, 20
            ]
        },
        lastThreeWorkouts: [
            {
                title: "Upper Body",
                date: "Today",
                duration: 45,
                exercises: 4
            },
            {
                title: "Cardio",
                date: "Yesterday",
                duration: 30,
                exercises: 2
            },
            {
                title: "Lower Body",
                date: "2 days ago",
                duration: 50,
                exercises: 5
            },
        ]
    };

    function convertHeight(height: number) {
        return (height / tempState.workoutStas.targetDuration * 100).toFixed(1)
    }

    return (
        <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{`${tempState.weeklyGoals.completedAmountOfWorkouts}/${tempState.weeklyGoals.totalAmountOfWorkout} Workouts`}</div>
                        <Progress value={tempState.weeklyGoals.completedAmountOfWorkouts/tempState.weeklyGoals.totalAmountOfWorkout*100} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-2">{tempState.weeklyGoals.totalAmountOfWorkout - tempState.weeklyGoals.completedAmountOfWorkouts} more workouts to reach your weekly goal</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{tempState.totalMonthWorkouts}</div>
                        <p className="text-xs text-muted-foreground mt-2">{tempState.totalMonthWorkouts - tempState.previousMonthWorkouts > 0 ? `+${tempState.totalMonthWorkouts - tempState.previousMonthWorkouts}` : `${tempState.totalMonthWorkouts - tempState.previousMonthWorkouts}`} from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Streak</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{tempState.checkInCount} days</div>
                        <p className="text-xs text-muted-foreground mt-2">Keep it up! Your longest streak is {tempState.longestStreak} days.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Weekly Activity<span className="text-sm text-muted-foreground font-medium"> - Workout Duration</span></CardTitle>
                    </CardHeader>
                    {/* Workout Duration */}
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-end gap-2">
                            {tempState.workoutStas.durationsPerWorkout.map((height, i) => (
                                <div key={i} className="relative h-full w-full">
                                    <div
                                        className="absolute bottom-0 w-full rounded-md bg-primary/20"
                                        style={{ height: "100%" }}
                                    ></div>
                                    <div
                                        className="absolute bottom-0 w-full rounded-md bg-primary transition-all"
                                        style={{ height: `${convertHeight(height)}%` }}
                                    >
                                        <div className="absolute h-full w-full flex items-center justify-center text-white">{`${convertHeight(height)}%`}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                            <div>Sun</div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Workouts</CardTitle>
                        <CardDescription>Your last 3 workout sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {
                                tempState.lastThreeWorkouts.map((workout, i) => {
                                    return(
                                        <WorkoutCard 
                                            key={`${workout.title}-${i}`}
                                            title={workout.title}
                                            date={workout.date}
                                            duration={`${workout.duration} min`}
                                            exercises={workout.exercises}
                                         />
                                    )
                                })
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
    )
}