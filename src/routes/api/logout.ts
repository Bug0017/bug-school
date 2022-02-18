import { prisma } from '$lib/db/prisma-client';
export async function post({ request }) {
	const { sessionId } = await request.json();

	const deletedSession = await prisma.cookie.delete({
		where: {
			id: sessionId
		}
	});

	console.log(deletedSession);

	return deletedSession;
}
