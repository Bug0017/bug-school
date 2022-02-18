import { prisma } from '$lib/db/prisma-client';
export async function get(context) {
	const { user } = context.locals;
	console.log(user);
	const data = await prisma.user.findFirst({
		where: { id: user.session.userId },
		include: {
			schools: {
				include: {
					staffs: true,
					classes: {
						include: {
							students: true
						}
					}
				}
			}
		}
		// @ts-ignore
	});
	console.log(data);

	delete data.password;
	return {
		status: 200,
		body: {
			data
		}
	};
}
