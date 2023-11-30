import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";


export const styles = StyleSheet.create({
    registerInputContainer:{
        justifyContent: "center"
    },
    label:{
        fontFamily: typography.semi,
        fontSize: 10,
        color: colors.placeholder2,
        marginBottom: 7
    },
    inputField: {
        height: 48,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        color: colors.black90,
        fontFamily: typography.normal,
        borderRadius: 2,
        fontSize: 16,
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: {
        width: 4,
        height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 1,
    },
    dateIcon: {
        position: "absolute",
        right: 27
    }
})