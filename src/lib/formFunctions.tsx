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
    const notes = await prisma.iP.findUnique({
        where: {
            ip: ip
        }
    });
    return notes?.notes || '';
}
