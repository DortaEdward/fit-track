import { db } from "./db";
import type { Exercise } from "@prisma/client";

const WorkoutQueries = {
    async CreateWorkoutSession(userId: string, workoutType: string, durationMin: number, exercise:Exercise) {
             

        return await db.workoutSession.create({
            data:{
                userId,
                type: workoutType,
                durationMin,
                date: new Date(),
                exercises:{
                    create:[]
                }
            }
        })
     
        // return await db.user.create({
        //     data: {
        //         clerk_id: id,
        //         email: email,
        //         first_name: firstName,
        //         last_name: lastName,
        //     },
        // });
    },

}


export default WorkoutQueries;