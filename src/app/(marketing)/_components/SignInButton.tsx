"use client"

import { useClerk } from "@clerk/nextjs"
import { Button } from "~/components/ui/button";

export default function SignInButton() {
    const { redirectToSignIn } = useClerk();

    function handleSignIn() {
        redirectToSignIn({
            redirectUrl: "/dashboard",
        });
    }
    return (
        <Button size="lg" className="cursor-pointer" asChild onClick={handleSignIn}>
            <span>
                Start Your First Workout
            </span>
        </Button>
    )
}