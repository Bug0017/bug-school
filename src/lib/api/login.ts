import axios from 'axios';

export const loginUser = async (user) => {
	const loginUser = await axios.post('http://localhost:3000/api/login', user);
	return loginUser;
};
