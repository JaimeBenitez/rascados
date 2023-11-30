import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";



export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginLogo: {
        width: 135,
        height: 188,
        marginBottom: 65
    },
    inputField: {
        width: 311,
        height: 56,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginTop: 25,
        paddingHorizontal: 15,
        color: colors.white,
        fontFamily: typography.semi
    },
    passwordForgotten: {
        marginTop: 17,
        width: 311,
        alignItems: "flex-end"
    },
    text: {
        color: colors.white,
        fontFamily: typography.normal
    },
    linkText: {
        color: colors.white,
        textDecorationLine: 'underline',
        fontFamily: typography.normal
    },
    registerLinkContainer: {
        marginTop: 115,
        marginBottom: 31,
        flexDirection: 'row'
    }
})