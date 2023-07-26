import LoginScreen from "./LoginScreen";
import PostsScreen from "./PostsScreen";
import RegistrationScreen from "./RegistrationScreen";

export const RegistrationScr = () => (
    <PostsScreen>{<RegistrationScreen />}</PostsScreen>
);
export const LoginScr = () => <PostsScreen>{<LoginScreen />}</PostsScreen>;
