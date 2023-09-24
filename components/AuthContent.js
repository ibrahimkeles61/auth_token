import { StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";

export default function AuthContent({ login, onAuthenticate }) {
	const navigation = useNavigation();

	const [credentialsInvalid, setCredentialsInvalid] = useState({
		email: false,
		confirmEmail: false,
		password: false,
		confirmEmail: false,
	});

	const switchScreen = () =>
		login ? navigation.navigate("SignUp") : navigation.navigate("Login");

	const submitHandler = (credentials) => {
		let { email, confirmEmail, password, confirmPassword } = credentials;
		email = email.trim();
		password = password.trim();

		const emailIsValid = email.includes("@");
		const passwordIsValid = password.length > 6;
		const emailsAreEqual = email === confirmEmail;
		const passwordsAreEqual = password === confirmPassword;

		if (
			!emailIsValid ||
			!passwordIsValid ||
			(!login && (!emailsAreEqual || !passwordsAreEqual))
		) {
			Alert.alert("Ops! girdiğiniz değerleri kontrol edin");
			setCredentialsInvalid({
				email: !emailIsValid,
				confirmEmail: !emailIsValid || !emailsAreEqual,
				password: !passwordIsValid,
				confirmPassword: !passwordIsValid || !passwordsAreEqual,
			});
			return;
		}

		onAuthenticate({ email, password });
	};

	return (
		<View style={styles.container}>
			<AuthForm
				login={login}
				onsubmit={submitHandler}
				credentialsInvalid={credentialsInvalid}
			/>
			<View>
				<ButtonWhite onPress={switchScreen}>
					{login ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
				</ButtonWhite>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "blueviolet",
		borderRadius: 20,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 4,

		marginTop: 50,
		marginHorizontal: 30,
		padding: 15,
	},
});
