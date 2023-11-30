import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";



export const styles = StyleSheet.create({
    passwordForgottenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    backArrow: {
        position: "absolute",
        top: 24,
        left: 24
    },
    inputField: {
        width: 311,
        height: 56,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginTop: 90,
        paddingHorizontal: 15,
        color: colors.white,
        fontFamily: typography.semi
    },
    text: {
        color: colors.white,
        fontFamily: typography.normal,
        fontSize: 16,
        textAlign: "center",
        width: 290
    },
    titleText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: typography.bold,
    },
    continueButton: {
        position: "absolute",
        bottom: 62
    }
})