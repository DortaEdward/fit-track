import { CalendarIcon, Clock, Dumbbell } from "lucide-react"

interface WorkoutCardProps {
    title: string
    date: string
    duration: string
    exercises: number
}

export default function WorkoutCard({ title, date, duration, exercises }: WorkoutCardProps) {
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