import { StyleSheet, Text, Pressable } from "react-native";

export default function Button({ children, onPress }) {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: "green",
		borderRadius: 20,

		paddingVertical: 10,
	},

	pressed: {
		opacity: 0.5,
	},

	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",

		textAlign: "center",
	},
});
