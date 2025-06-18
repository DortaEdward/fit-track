"use server";


import { currentUser } from "@clerk/nextjs/server";
import { db } from "~/server/db/db";

export async function createWorkoutSession({
    type,
    durationMin,
    date,
    exercises,
}: {
    type: string;
    durationMin: number;
    date: Date;
    exercises: {
        name: string;
        sets: number;
        reps: number;
        weight: number;
        complete: boolean;
    }[];
}) {
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("Not authenticated");

    const user = await db.user.findFirst({
        where: {
            clerk_id: clerkUser.id
        }
    })

    if (!user) throw new Error("Not authenticated");

    return await db.workoutSession.create({
        data: {
            userId: user.id,
            type,
            durationMin,
            date,
            exercises: {
                create: exercises,
            },
        },
    });
}