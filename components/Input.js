import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Input({
	label,
	value,
	keyboardType,
	onUpdateValue,
	secure,
}) {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				value={value}
				autoCapitalize="none"
				keyboardType={keyboardType}
				onChangeText={onUpdateValue}
				secureTextEntry={secure}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 8,
	},

	label: {
		color: "white",

		marginBottom: 3,
	},

	input: {
		backgroundColor: "pink",
		borderRadius: 20,
		fontSize: 16,

		paddingVertical: 8,
		paddingHorizontal: 10,
	},
});
