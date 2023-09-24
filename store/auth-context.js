import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
	token: "",
	isAuthenticate: false,
	authenticate: (token) => {},
	logout: () => {},
});

export default AuthContextProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState(null);

	useEffect(() => {
		async function fetchToken() {
			const storedToken = await AsyncStorage.getItem("token");
			storedToken && setAuthToken(storedToken);
		}

		fetchToken();
	}, []);

	const authenticate = (token) => (
		setAuthToken(token), AsyncStorage.setItem("token", token)
	);

	const logout = () => (setAuthToken(null), AsyncStorage.removeItem("token"));

	const value = {
		token: authToken,
		isAuthenticate: !!authToken,
		authenticate: authenticate,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
