import { useState, useEffect, useRef } from "react";
import { Label } from "@radix-ui/react-label";
import { Bell, BellRing, Pause, Play, RotateCcw, Timer } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";

export default function RestTimer() {

    const [isRunning, setIsRunning] = useState(false)
    const [timeLeft, setTimeLeft] = useState(60)
    const [customTime, setCustomTime] = useState<number>(0);
    const [selectedTime, setSelectedTime] = useState<number>(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastStartTimeRef = useRef<number | null>(null);

    const [notificationToggle, setNotificationToggle] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    function startRestTimer(secs: number) {
        setTimeLeft(secs)
        setSelectedTime(secs)
    }

    const resetTimer = () => {
        setIsRunning(false)
        setTimeLeft(0);
    }

    function handleRestTimerSet(secs: number) {
        if (isRunning) return
        startRestTimer(secs)
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
        setIsRunning(false);
    }

    function playNotification() {
        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/notification.mp3");
        }
        audioRef.current.currentTime = 0; // reset to start
        audioRef.current.play();

    }

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            lastStartTimeRef.current = Date.now();
            intervalRef.current = setInterval(() => {
                if (lastStartTimeRef.current !== null) {
                    const now = Date.now();
                    const elapsed = Math.floor((now - lastStartTimeRef.current) / 1000);
                    setTimeLeft(prev => {
                        const updated = prev - elapsed
                        if (updated <= 0) {
                            setIsRunning(false);
                            setTimeLeft(selectedTime)
                            return 0;
                        }
                        return updated
                    });
                    lastStartTimeRef.current = now;
                }
            }, 1000)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            lastStartTimeRef.current = null;
            if (notificationToggle && timeLeft == 0) {
                playNotification()
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

    }, [isRunning, timeLeft])



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
                    <Button size="sm" disabled={isRunning} className="cursor-pointer" onClick={() => handleRestTimerSet(60)} variant="outline">
                        1:00
                    </Button>
                    <Button size="sm" disabled={isRunning} className="cursor-pointer" onClick={() => handleRestTimerSet(90)} variant="outline">
                        1:30
                    </Button>
                    <Button size="sm" disabled={isRunning} className="cursor-pointer" onClick={() => handleRestTimerSet(120)} variant="outline">
                        2:00
                    </Button>
                    <Button size="sm" disabled={isRunning} className="cursor-pointer" onClick={() => handleRestTimerSet(180)} variant="outline">
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
                            disabled={isRunning}
                            onChange={(e) => setCustomTime(Number(e.target.value))}
                            className="h-8"
                        />
                    </div>
                    <Button size="sm" disabled={isRunning} onClick={() => handleRestTimerSet(customTime)} className="mt-5 cursor-pointer">
                        Set
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
                            onClick={() => setIsRunning(true)}
                            disabled={timeLeft === 0}>
                            <Play className="mr-2 h-4 w-4" />
                            Start
                        </Button>
                    )}
                    <Button
                        onClick={resetTimer}
                        variant="outline">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}