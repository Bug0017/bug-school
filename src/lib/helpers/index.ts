import { prisma } from '$lib/db/prisma-client';

export async function getUserInformation(cookieId) {
	const session = await prisma.cookie.findUnique({ where: { sessionId: cookieId } });
	if (session) {
		return { session };
	} else {
		return { session: '' };
	}
}
