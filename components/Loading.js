import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
export default function Loading() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Please Wait..</Text>
			<ActivityIndicator size="large" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		fontSize: 16,

		marginBottom: 10,
	},
});
