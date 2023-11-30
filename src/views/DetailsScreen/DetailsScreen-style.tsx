import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";

export const styles = StyleSheet.create({
    backgroundImage: {
        height: 244,
        width: '100%'
    },
    image: {
        height: 244,
        width: 163,
        position: 'absolute',
        left: 114
    },
    title: {
        fontFamily: typography.semi,
        fontSize: 21,
        marginTop: 24,
        marginLeft: 24
    },
    category:{
        backgroundColor: colors.marine,
        height: 24,
        borderRadius: 2,
        width: 90,
        marginTop: 24,
        marginLeft: 24,
        marginBottom: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText:{
        color: colors.white,
        textTransform: 'capitalize',
        fontFamily: typography.normal
    },
    description: {
        fontFamily: typography.normal,
        fontSize: 16,
        marginLeft: 24,
        marginTop: 20
    },
    button: {
        alignSelf: 'center',
        marginTop: 165,
        width: 194,
        borderWidth: 2,
        borderColor: colors.marine
    },
    littleButton: {
        backgroundColor: 'transparent',
        marginTop: 165,
        width: 12
    },
})