import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";

export default function Testimonials() {
    return (
        <section id="pricing" className="container py-24 bg-muted/50 mx-auto">
            <div className="max-w-4xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple Pricing</h2>
                <p className="text-xl text-muted-foreground">
                    Start for free, upgrade when you're ready for more features.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Free</CardTitle>
                        <CardDescription>Perfect for getting started</CardDescription>
                        <div className="text-3xl font-bold">
                            $0<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Unlimited workouts
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Basic progress tracking
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Workout timer & rest timer
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Mobile optimized
                            </li>
                        </ul>
                        <Button className="w-full mt-6" variant="outline" asChild>
                            <Link href="/">Get Started Free</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-primary">
                    <CardHeader>
                        <CardTitle>Pro</CardTitle>
                        <CardDescription>For serious fitness enthusiasts</CardDescription>
                        <div className="text-3xl font-bold">
                            $9<span className="text-sm font-normal text-muted-foreground">/month</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Everything in Free
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Advanced analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Workout templates
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Smart notifications
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                Data export
                            </li>
                        </ul>
                        <Button className="w-full mt-6" asChild>
                            <Link href="/">Start Pro Trial</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}