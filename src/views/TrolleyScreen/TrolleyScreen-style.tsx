import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text:{
        fontSize: 16,
        fontFamily: typography.normal,
        color: colors.black,
        opacity: 0.5
    },
    button: {
        alignSelf: 'center',
        width: 235,
        marginTop: 30,
        borderWidth: 2,
        borderColor: colors.marine
    },
})