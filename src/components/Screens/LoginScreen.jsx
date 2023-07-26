import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.containerblox}
            >
                <Text style={{ ...styles.text, marginBottom: 32 }}>Увійти</Text>
                <View style={styles.textWrap}>
                    <TextInput
                        style={styles.input}
                        placeholder="Адреса електронної пошти"
                    />
                </View>
                <View style={styles.passWrap}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Пароль"
                    />
                    <Text style={styles.passBool}>Показати</Text>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={{ ...styles.button, marginTop: 43 }}>
                <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <Text
                style={styles.login}
                title=""
                onPress={() => navigation.navigate("Registration")}
            >
                Немає акаунту? Зареєструватися
            </Text>
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    containerblox: { flex: 1 },
    container: {
        flex: 0.7,
        marginTop: "auto",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        padding: 16,
        paddingTop: 75,
        backgroundColor: "#fff",
    },
    text: {
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontSize: 30,
    },
    input: {
        textAlign: "left",
        padding: 16,
        height: 50,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
    textWrap: {
        marginBottom: 16,
    },
    passWrap: {
        position: "relative",
    },
    passBool: {
        position: "absolute",
        right: 16,
        top: 16,
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: "#FF6C00",
        borderRadius: 100,
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
    login: {
        marginTop: 16,
        textAlign: "center",
        color: "#1B4371",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
});
