import { StyleSheet, Alert } from "react-native";
import { useState, useContext } from "react";

import * as Components from "../components/_index";
import { AuthContext } from "../store/auth-context";

import { login } from "../utils/auth";

const LoginScreen = () => {
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	const authContext = useContext(AuthContext);

	const signInHandler = async ({ email, password }) => {
		setIsAuthenticate(true);
		try {
			const token = await login(email, password);

			authContext.authenticate(token);
		} catch (error) {
			Alert.alert("Login Failed!");
		}
		setIsAuthenticate(false);
	};

	return isAuthenticate ? (
		<Components.Loading />
	) : (
		<Components.AuthContent
			login
			onAuthenticate={signInHandler}
		/>
	);
};

const styles = StyleSheet.create({});

export default LoginScreen;
