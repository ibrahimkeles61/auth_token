import axios from "axios";

const API_KEY = "AIzaSyDfA_YiA8G2u6_HiinOyq-Hbl96xfRb9Bw";

export const createUser = async (email, password) => {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
		{
			email,
			password,
			returnSecureToken: true,
		}
	);
};
