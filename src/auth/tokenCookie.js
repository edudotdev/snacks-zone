import axios from 'axios';
import { getAuthCookie } from '../helpers/getCookie';
export async function validateTokenCookie() {
	const tokenCookie = getAuthCookie();
	if (!tokenCookie) return false;
	const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/auth`, {
		headers: {
			'auth-token': `${tokenCookie}`,
		},
	});
	if (!res.data.success) return false;

	res.data.token = tokenCookie;

	return res.data;
}
