import axios from 'axios';

export const loginUser = async (user) => {
	return await axios.post('http://localhost:3000/api/login', user);
};
