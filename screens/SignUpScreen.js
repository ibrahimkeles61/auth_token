import { StyleSheet, Text, View } from "react-native";

import * as Components from "../components/_index";

import { createUser } from "../utils/auth";

const signUpHandler = async ({ email, password }) =>
	await createUser(email, password);

export default function SignUpScreen() {
	return <Components.AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
