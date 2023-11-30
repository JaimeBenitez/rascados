import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";



export const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        alignItems: "center"
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
    },
    label:{
        fontFamily: typography.semi,
        fontSize: 10,
        color: colors.placeholder2,
        marginBottom: 7
    },
    dropdown: {
        width: 112,
        height: 48,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        color: colors.black90,
        fontFamily: typography.normal,
        borderRadius: 2,
        borderWidth: 0,
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
    dateField: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    dateText: {
       fontFamily: typography.normal,
       color: colors.black90
    },
    button: {
        borderWidth: 2,
        borderColor: colors.marine,
        marginTop: 221 
    }

})