"use server"
import prisma from "@/db";

export async function handleSubmit(data: FormData) {
    "use server"
    const ip = data.get('ip') as string;
    const notes = data.get('notes') as string;
    const submit = data.get('submit') as string;
    await prisma.iP.update({
        where: {
            ip: ip
        },
        data: {
            notes: notes
        }
    });
    if (submit === 'update') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

}

export async function getNotes(ip: string) {
    "use server"
    let notes = await prisma.iP.findUnique({
        where: {
            ip: ip
        }
    });

    if (!notes) {
        notes = await prisma.iP.create({
            data: {
                ip: ip,
                notes: ''
            }
        });
    }
    return notes?.notes || '';
}
