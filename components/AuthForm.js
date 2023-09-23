import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ login }) {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");

	const updateInput = (inputType, enteredValue) => {
		switch (inputType) {
			case "email":
				setEnteredEmail(enteredValue);
				break;
			case "password":
				setEnteredPassword(enteredValue);
		}
	};

	return (
		<View>
			<Input
				label="Email"
				value={enteredEmail}
				keyboardType="email-address"
				onUpdateValue={updateInput.bind(this, "email")}
			/>
			<Input
				label="Şifre"
				value={enteredPassword}
				onUpdateValue={updateInput.bind(this, "password")}
				secure
			/>
			<View style={styles.buttons}>
				<Button>{login ? "Giriş Yap" : "Kayıt Ol"}</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttons: {
		marginTop: 10,
	},
});
