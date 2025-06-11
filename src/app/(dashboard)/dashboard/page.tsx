import { Activity } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import OverviewTab from "./_components/OverviewTab";
import AnalyticsTab from "./_components/AnalyticsTab";
import WorkoutTab from "./_components/WorkoutTab";



export default function Dashboard() {
    const data = null;
    return (
        <div className="p-6">
            <div>
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground">Track your fitness progress and manage your workouts.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button asChild>
                            <Link href="/workout-session">
                                <Activity className="mr-2 h-4 w-4" />
                                New Workout
                            </Link>
                        </Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="workouts">Workouts</TabsTrigger>
                    </TabsList>
                    <OverviewTab />
                    <AnalyticsTab />
                    <WorkoutTab />
                </Tabs>
            </div>
        </div>
    )
}