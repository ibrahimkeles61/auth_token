import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ login, onsubmit, credentialsInvalid }) {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

	const {
		email: emailIsInvalid,
		confirmEmail: emailsDontMatch,
		password: passwordIsInvalid,
		confirmPassword: passwordsDontMatch,
	} = credentialsInvalid;

	const updateInput = (inputType, enteredValue) => {
		switch (inputType) {
			case "email":
				setEnteredEmail(enteredValue);
				break;
			case "confirmEmail":
				setEnteredConfirmEmail(enteredValue);
				break;
			case "password":
				setEnteredPassword(enteredValue);
				break;
			case "confirmPassword":
				setEnteredConfirmPassword(enteredValue);
		}
	};

	const sumbitHandler = () => {
		onsubmit({
			email: enteredEmail,
			confirmEmail: enteredConfirmEmail,
			password: enteredPassword,
			confirmPassword: enteredConfirmPassword,
		});
	};

	return (
		<View>
			<Input
				label="Email"
				value={enteredEmail}
				keyboardType="email-address"
				onUpdateValue={updateInput.bind(this, "email")}
				isInvalid={emailIsInvalid}
			/>
			{!login && (
				<Input
					label="Confirm Email"
					value={enteredConfirmEmail}
					keyboardType="email-address"
					onUpdateValue={updateInput.bind(this, "confirmEmail")}
					isInvalid={emailsDontMatch}
				/>
			)}
			<Input
				label="Password"
				value={enteredPassword}
				onUpdateValue={updateInput.bind(this, "password")}
				secure
				isInvalid={passwordIsInvalid}
			/>
			{!login && (
				<Input
					label="Confirm Password"
					value={enteredConfirmPassword}
					onUpdateValue={updateInput.bind(this, "confirmPassword")}
					secure
					isInvalid={passwordsDontMatch}
				/>
			)}
			<View style={styles.buttons}>
				<Button onPress={sumbitHandler}>{login ? "Login" : "Save"}</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttons: {
		marginTop: 10,
	},
});
