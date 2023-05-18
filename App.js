import { useFonts } from "expo-font";
import PostsScreen from "./src/components/Screens/PostsScreen";
import RegistrationScreen from "./src/components/Screens/RegistrationScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <PostsScreen>
            <RegistrationScreen />
        </PostsScreen>
    );
}
