import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { RegistrationScr, LoginScr } from "./src/components/Screens";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }

    const MainStack = createStackNavigator();
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="Registration"
                    component={RegistrationScr}
                />
                <MainStack.Screen name="Login" component={LoginScr} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
