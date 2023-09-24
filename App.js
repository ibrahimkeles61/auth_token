import { useContext, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import AuthContextProvider, { AuthContext } from "./store/auth-context";

import * as Screens from "./screens/_index";

const Stack = createNativeStackNavigator();

const NotAuthStack = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: "blueviolet",
			},
			headerTintColor: "white",
			contentStyle: {
				backgroundColor: "#aaa",
			},
		}}
	>
		<Stack.Screen
			name="Login"
			component={Screens.LoginScreen}
			options={{
				headerTitle: "Kullanıcı Giriş",
			}}
		/>
		<Stack.Screen
			name="SignUp"
			component={Screens.SignUpScreen}
			options={{
				headerTitle: "Kullanıcı Kayıt",
			}}
		/>
	</Stack.Navigator>
);

const AuthStack = () => {
	const authContext = useContext(AuthContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "blueviolet",
				},
				headerTintColor: "white",
				contentStyle: {
					backgroundColor: "#aaa",
				},
			}}
		>
			<Stack.Screen
				name="Home"
				component={Screens.HomeScreen}
				options={{
					headerTitle: "Ana Sayfa",
					headerRight: ({ tintColor }) => (
						<Pressable
							style={({ pressed }) => pressed && styles.pressed}
							onPress={authContext.logout}
						>
							<Ionicons
								name="exit"
								size={24}
								color={tintColor}
							/>
						</Pressable>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

function Navigation() {
	const authContext = useContext(AuthContext);
	return (
		<NavigationContainer>
			{authContext.isAuthenticate && <AuthStack />}
			{!authContext.isAuthenticate && <NotAuthStack />}
		</NavigationContainer>
	);
}

const App = () => (
	<AuthContextProvider>
		<Navigation />
	</AuthContextProvider>
);

export default App;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.5,
	},
});
