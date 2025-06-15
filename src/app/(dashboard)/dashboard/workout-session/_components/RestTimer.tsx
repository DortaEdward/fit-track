import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Bell, BellRing, Pause, Play, RotateCcw, Timer } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";

export default function RestTimer() {

    const [isRunning, setIsRunning] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0)

    const [notificationToggle, setNotificationToggle] = useState(true);


    function startRestTimer(num: number | null) {

    }

    function formatTime(seconds: number) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        if (hours > 0) {
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
        }
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    function pauseTimer(event: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Card>
            <CardHeader>

                <CardTitle className="text-2xl text-center flex justify-between">
                    <div className="flex items-center gap-1">
                        <Timer />
                        Rest Timer
                    </div>
                    <div className="flex items-center gap-1">
                        {/* Handle toggle */}
                        <Switch
                            className="cursor-pointer"
                            checked={notificationToggle ? true : false}
                            onClick={() => setNotificationToggle(prev => !prev)}
                        />
                        {
                            notificationToggle
                                ? <BellRing className="h-4 w-4" />
                                : <Bell className="h-4 w-4" />
                        }
                    </div>
                </CardTitle>

            </CardHeader>
            <CardContent className="space-y-4">
                <div className="text-center">
                    <div className="text-3xl font-mono font-bold">{formatTime(timeLeft)}</div>
                    {timeLeft === 0 && !isRunning && (
                        <p className="text-sm text-muted-foreground mt-1">Ready to start rest timer</p>
                    )}
                    {timeLeft === 0 && isRunning && <p className="text-sm font-medium text-green-600 mt-1">Rest complete!</p>}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    <Button size="sm" className="cursor-pointer" onClick={() => startRestTimer(60)} variant="outline">
                        1:00
                    </Button>
                    <Button size="sm" className="cursor-pointer" onClick={() => startRestTimer(90)} variant="outline">
                        1:30
                    </Button>
                    <Button size="sm" className="cursor-pointer" onClick={() => startRestTimer(120)} variant="outline">
                        2:00
                    </Button>
                    <Button size="sm" className="cursor-pointer" onClick={() => startRestTimer(180)} variant="outline">
                        3:00
                    </Button>
                </div>

                <div className="flex gap-2">
                    <div className="flex-1">
                        <Label htmlFor="custom-time" className="text-xs">
                            Custom (seconds)
                        </Label>
                        <Input
                            id="custom-time"
                            type="number"
                            // value={customTime}
                            // onChange={(e) => setCustomTime(e.target.value)}
                            // onBlur={updateCustomTime}
                            className="h-8"
                        />
                    </div>
                    <Button size="sm" onClick={() => startRestTimer(0)} className="mt-5 cursor-pointer">
                        Start
                    </Button>
                </div>

                <div className="flex gap-2 justify-center">
                    {isRunning ? (
                        <Button onClick={pauseTimer} variant="outline">
                            <Pause className="mr-2 h-4 w-4" />
                            Pause
                        </Button>
                    ) : (
                        <Button
                            // onClick={() => setIsRunning(true)} 
                            disabled={timeLeft === 0}>
                            <Play className="mr-2 h-4 w-4" />
                            Resume
                        </Button>
                    )}
                    <Button
                        // onClick={resetTimer} 
                        variant="outline">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}