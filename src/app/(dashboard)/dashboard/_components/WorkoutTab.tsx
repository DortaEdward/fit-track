import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent } from "~/components/ui/tabs";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutTab() {
    return (
        <TabsContent value="workouts" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Workout History</CardTitle>
                    <CardDescription>View and manage your workout history</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <WorkoutCard title="Upper Body" date="Today" duration="45 min" exercises={4} />
                        <WorkoutCard title="Cardio" date="Yesterday" duration="30 min" exercises={2} />
                        <WorkoutCard title="Lower Body" date="2 days ago" duration="50 min" exercises={5} />
                        <WorkoutCard title="Full Body" date="4 days ago" duration="60 min" exercises={8} />
                        <WorkoutCard title="Cardio" date="6 days ago" duration="35 min" exercises={3} />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

    )
}