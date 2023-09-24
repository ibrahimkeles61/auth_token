import axios from "axios";

const API_KEY = "AIzaSyDfA_YiA8G2u6_HiinOyq-Hbl96xfRb9Bw";

const authenticate = async (mode, email, password) => {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
		{
			email,
			password,
			returnSecureToken: true,
		}
	);

	return response.data.idToken;
};

export const createUser = (email, password) =>
	authenticate("signUp", email, password);

export const login = (email, password) =>
	authenticate("signInWithPassword", email, password);
