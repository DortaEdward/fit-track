import { db } from "./db";

const  UserQueries= {
    async CreateUser(id: string, email: string, firstName: string, lastName: string) {
        return await db.user.create({
            data: {
                clerk_id: id,
                email: email,
                first_name: firstName,
                last_name: lastName,
            },
        });
    },
    async FindUser(clerk_id: string) {
        return await db.user.findUnique({
            where: { clerk_id },
        });
    },
    async UpdateUser() { },
    async DeleteUser() { },
}


export default UserQueries;