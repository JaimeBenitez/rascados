import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.white,
        width: 140,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 26,
    },
    buttonActive: {
        backgroundColor: colors.marine,
        width: 140,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 26,
    },
    text: {
        color: colors.marine,
        fontSize: 16,
        fontFamily: typography.semi
    },
    textActive: {
        color: colors.white,
        fontSize: 16,
        fontFamily: typography.semi
    }


})