import { Calendar, Activity, TrendingUp, BarChart3, } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";


import { CalendarIcon, Clock, Dumbbell } from "lucide-react"

interface WorkoutCardProps {
  title: string
  date: string
  duration: string
  exercises: number
}

export function WorkoutCard({ title, date, duration, exercises }: WorkoutCardProps) {
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <span>{date}</span>
          <span className="mx-1">•</span>
          <Clock className="mr-1 h-3 w-3" />
          <span>{duration}</span>
          <span className="mx-1">•</span>
          <Dumbbell className="mr-1 h-3 w-3" />
          <span>{exercises} exercises</span>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
    return (
        <div className="p-6">
            <section className="grid md:grid-col-2">
                <div>
                    <p className="text-2xl tracking-tight font-bold">Dashboard</p>
                    <p className="text-muted-foreground ">Track your fitness progress and manage your workouts.</p>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                            <TabsTrigger value="workouts">Workouts</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">3/5 workouts</div>
                                    <Progress value={60} className="mt-2" />
                                    <p className="text-xs text-muted-foreground mt-2">2 more workouts to reach your weekly goal</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">24</div>
                                    <p className="text-xs text-muted-foreground mt-2">+3 from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Streak</CardTitle>
                                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">7 days</div>
                                    <p className="text-xs text-muted-foreground mt-2">Keep it up! Your longest streak is 14 days.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="lg:col-span-4">
                                <CardHeader>
                                    <CardTitle>Weekly Activity</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <div className="h-[200px] flex items-end gap-2">
                                        {[40, 20, 60, 30, 70, 50, 20].map((height, i) => (
                                            <div key={i} className="relative h-full w-full">
                                                <div
                                                    className="absolute bottom-0 w-full rounded-md bg-primary/20"
                                                    style={{ height: "100%" }}
                                                ></div>
                                                <div
                                                    className="absolute bottom-0 w-full rounded-md bg-primary transition-all"
                                                    style={{ height: `${height}%` }}
                                                ></div>
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
                                        <WorkoutCard title="Upper Body" date="Today" duration="45 min" exercises={4} />
                                        <WorkoutCard title="Cardio" date="Yesterday" duration="30 min" exercises={2} />
                                        <WorkoutCard title="Lower Body" date="2 days ago" duration="50 min" exercises={5} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="analytics" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Progress Analytics</CardTitle>
                                <CardDescription>Track your fitness progress over time</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px] flex items-end gap-2">
                                <div className="h-full w-full flex items-center justify-center">
                                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                                    <p className="text-muted-foreground ml-2">Analytics data will appear here</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
                <div></div>
            </section>
        </div>
    )
}