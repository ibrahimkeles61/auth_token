import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hoşgeldiniz!</Text>
			<Text>Giriş Başarılı!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",

		marginBottom: 10,
	},
});
