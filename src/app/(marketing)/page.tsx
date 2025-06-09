import { ArrowRight, Activity, Timer, Bell, BarChart3, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6" />
          <span className="font-bold text-xl">FitTrack</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


function Footer() {
  return (
    < footer className="border-t bg-muted/50" >
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6" />
              <span className="font-bold text-xl">FitTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">Simple, effective fitness tracking without the clutter.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FitTrack. All rights reserved.</p>
        </div>
      </div>
    </footer >
  )
}



export default function LandingPage() {
  return (
    <main className="flex-1">

      <section className="container py-24 md:py-32 mx-auto">
        <div className=" max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6">
              <Zap className="mr-2 h-4 w-4" />
              Simple. Effective. Minimalistic.
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Track Your Fitness
              <br />
              <span className="text-primary">Without the Clutter</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A clean, minimalistic fitness tracker that focuses on what matters most - your workouts, progress, and
              goals. No distractions, just results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                Start Your First Workout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="container py-24 bg-muted/50 mx-auto">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-xl text-muted-foreground">
            FitTrack provides essential fitness tracking features in a clean, distraction-free interface.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Timer className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Smart Workout Timer</CardTitle>
              <CardDescription>
                Track your workout duration with precision. Built-in rest timer helps optimize your recovery between
                sets.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Exercise Logging</CardTitle>
              <CardDescription>
                Log exercises, sets, reps, and weights in real-time. Simple interface that doesn't get in your way.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Visualize your fitness journey with clean charts and metrics. Track strength gains and body
                measurements.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Smart Notifications</CardTitle>
              <CardDescription>
                Get notified when rest time is up and receive workout reminders to stay consistent with your routine.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Mobile Optimized</CardTitle>
              <CardDescription>
                Perfect for gym use. Responsive design that works seamlessly on your phone, tablet, or desktop.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                No loading screens, no lag. Start tracking your workout instantly with our optimized performance.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="container py-24 mx-auto">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple. Effective. Results.</h2>
          <p className="text-xl text-muted-foreground">Get started with FitTrack in three simple steps.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Your Workout</h3>
            <p className="text-muted-foreground">
              Click "New Workout" and the timer starts automatically. No complex setup required.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Log Your Exercises</h3>
            <p className="text-muted-foreground">
              Add exercises as you perform them. Track sets, reps, and weights with our intuitive interface.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-muted-foreground">
              View your workout history, track your strength gains, and monitor your fitness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-24 bg-muted/50 mx-auto">
        <div className="max-w-4xl">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Workouts Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonial Section */}
      {/* Pricing Section */}
      
      {/* CTA Section */}
      <section className="container py-24 mx-auto">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have simplified their fitness tracking with FitTrack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                Start Your First Workout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
