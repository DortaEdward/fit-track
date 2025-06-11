import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { currentUser, type User } from "@clerk/nextjs/server"

type Props = {
    user: User | null
}

function MainNav({ user }: Props) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Link href={"/"} className="flex gap-2">
                <img src={"/logo.png"} className="h-6 rounded" />
                    <span className="font-bold md:inline-block hidden">Fit-Track</span>
                </Link>
                {
                    user
                        ?
                        <nav className="pl-10 md:flex gap-6 hidden">
                            <Link href={"/dashboard"} className="text-sm font-medium transition-colors hover:text-primary">Dashboard</Link>
                            <Link href={"/workouts"} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Workouts</Link>
                            <Link href={"/progress"} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Progress</Link>
                            <Link href={"/exercises"} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Exercises</Link>
                        </nav>
                        :
                        <>
                        </>
                }
            </div>
        </div>
    )
}

function MobileNav({ user }: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden cursor-pointer h-6">
                    <Menu size={5} />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>FitTrack</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8 ml-4">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Dashboard
                    </Link>
                    <Link
                        href="/workouts"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/progress"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Progress
                    </Link>
                    <Link
                        href="/exercises"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Exercises
                    </Link>
                    <Link
                        href="/settings"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Settings
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}



export default async function Header() {
    const user = await currentUser();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-background/95 supports-[backdrop-filter]:bg-background/60 p-6 flex items-center justify-between">
            <MainNav user={user} />
            <MobileNav user={user} />
            <div className="hidden md:inline-block">
                <SignedIn>
                    <div className="h-6">
                        <UserButton />
                    </div>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button className="cursor-pointer border border-black" variant={"secondary"}>Get Started</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </header>
    )
}