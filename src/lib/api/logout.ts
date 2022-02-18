import axios from 'axios';

export const logout = async (session) => {
	return await axios.post('http://localhost:3000/api/logout', session);
};
