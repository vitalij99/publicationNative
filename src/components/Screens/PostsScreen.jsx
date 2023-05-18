import { ImageBackground, StyleSheet, View } from "react-native";

const PostsScreen = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../images/bg.jpg")}
                resizeMode="cover"
                style={styles.image}
            >
                <>{children}</>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
});
export default PostsScreen;
