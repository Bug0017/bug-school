import { prisma } from '$lib/db/prisma-client';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

export async function post({ request }) {
	const data = await request.formData();
	const username = await data.get('username');
	const password = await data.get('password');
	// @ts-ignore
	const user = await prisma.user.findUnique({ where: { username } });

	if (!user) {
		return {
			status: 401,
			body: {
				error: 'User not found'
			}
		};
	}

	if (user?.password !== password) {
		return {
			status: 401,
			body: {
				error: 'Invalid password'
			}
		};
	}

	const sessionId = uuidv4();
	const userId = user.id;

	// @ts-ignore
	const session = await prisma.cookie.create({
		data: {
			sessionId,
			userId
		}
	});

	console.log(session);
	return {
		headers: {
			'Set-Cookie': cookie.serialize('sessionId', sessionId, {
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7,
				path: '/',
				sameSite: 'lax'
			})
		},
		status: 200,
		body: {
			data: 'success'
		}
	};
}
