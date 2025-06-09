import { Card, CardContent } from "~/components/ui/card";

export default function Testimonials() {
    return (
        <section className="container py-24">
            <div className="mx-auto max-w-4xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Loved by Fitness Enthusiasts</h2>
                <p className="text-xl text-muted-foreground">See what our users have to say about FitTrack.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <Card>
                    <CardContent className="pt-6">
                        <div className="mb-4">
                            <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                            <p className="text-muted-foreground">
                                "Finally, a fitness app that doesn't overwhelm me with features I don't need. Clean, simple, and
                                effective."
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-medium">SM</span>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Sarah M.</div>
                                <div className="text-xs text-muted-foreground">Personal Trainer</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="mb-4">
                            <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                            <p className="text-muted-foreground">
                                "The rest timer notifications are a game-changer. I never miss my optimal rest periods anymore."
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-medium">MJ</span>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Mike J.</div>
                                <div className="text-xs text-muted-foreground">Powerlifter</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="mb-4">
                            <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                            <p className="text-muted-foreground">
                                "Perfect for tracking progress without the complexity. The minimalist design keeps me focused."
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-medium">AL</span>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Alex L.</div>
                                <div className="text-xs text-muted-foreground">Fitness Enthusiast</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}