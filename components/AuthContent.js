import { StyleSheet, Text, View } from "react-native";

import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";

export default function AuthContent({ login }) {
	return (
		<View style={styles.container}>
			<AuthForm login={login} />
			<View>
				<ButtonWhite>
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
