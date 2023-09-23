import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
		/>
	</Stack.Navigator>
);

const App = () => (
	<NavigationContainer>
		<NotAuthStack />
	</NavigationContainer>
);

export default App;
