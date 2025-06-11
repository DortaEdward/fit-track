import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, type WebhookEvent } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import UserQueries from '~/server/db/user.queries'

export async function POST(req: Request) {
    const CLERK_WEBHOOK_SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET
    if (!CLERK_WEBHOOK_SIGNING_SECRET) {
        throw new Error('Error: Please add CLERK_WEBHOOK_SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
    }

    const wh = new Webhook(CLERK_WEBHOOK_SIGNING_SECRET)

    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing Svix headers', {
            status: 400,
        })
    }

    const payload = await req.json()
    const body = JSON.stringify(payload)

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error: Could not verify webhook:', err)
        return new Response('Error: Verification error', {
            status: 400,
        })
    }

    if (evt.type === "user.created") {
        const { id, email_addresses, first_name, last_name } = evt.data;
        console.log("Hit")
        try {
            const newUserId = await UserQueries.CreateUser(id, email_addresses[0]!.email_address, first_name!, last_name!)
            console.log("New User: ", newUserId)
            if (newUserId) {
                const client = await clerkClient()
                await client.users.updateUserMetadata(id, {
                    publicMetadata: {
                        userId: newUserId
                    }
                })
            }
            return NextResponse.json({ message: "OK" })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    if (evt.type === "user.updated") {
        // updated user
    }

    // Delete User in Db
    if (evt.type === "user.deleted") {
        try {
            // const deletedUser = await db.user.delete({
            //   where: {
            //     clerkId: evt.data.id,
            //   }
            // })
            // console.log("Deleted User: ", deletedUser.id)

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    return new Response('Webhook received', { status: 200 })
}