import { StyleSheet, Alert } from "react-native";
import { useState, useContext } from "react";

import * as Components from "../components/_index";
import { AuthContext } from "../store/auth-context";

import { createUser } from "../utils/auth";

export default function SignUpScreen() {
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	const authContext = useContext(AuthContext);

	const signUpHandler = async ({ email, password }) => {
		setIsAuthenticate(true);

		try {
			const token = await createUser(email, password);

			authContext.authenticate(token);
		} catch (error) {
			Alert.alert("Register Failed", "Please check your informations..");
		}

		setIsAuthenticate(false);
	};

	return isAuthenticate ? (
		<Components.Loading />
	) : (
		<Components.AuthContent onAuthenticate={signUpHandler} />
	);
}

const styles = StyleSheet.create({});
