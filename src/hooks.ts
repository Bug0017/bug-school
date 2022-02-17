import { getUserInformation } from '$lib/helpers';
import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	const cookieId = event.request.headers.get('cookie');
	if (cookieId) {
		event.locals.user = await getUserInformation(cookie.parse(cookieId).sessionId);
	}
	const response = await resolve(event);
	return response;
}

export const getSession = (request) => {
	const session = request.locals?.user?.session;

	if (!session) {
		return {
			status: 302,
			headers: {
				Location: '/'
			},
			body: {
				session: null
			}
		};
	}
	return {
		status: 200,
		body: {
			session
		}
	};
};
