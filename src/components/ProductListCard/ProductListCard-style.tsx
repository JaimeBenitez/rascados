import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";

export const styles = StyleSheet.create({
    cardContainer:{
        marginVertical: 19.5,
        flexDirection: 'row'
    },
    imageContainer:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    image: {
        width: 140, 
        height: 140,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.black 
    },
    textContainer:{
        marginLeft: 16,
        justifyContent: 'center'
    },
    title:{
        fontFamily: typography.semi,
        fontSize: 16,
        marginBottom: 6
    },
    category:{
        backgroundColor: colors.marine,
        height: 24,
        borderRadius: 2,
        width: 90,
        marginTop: 6,
        marginBottom: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText:{
        color: colors.white,
        textTransform: 'capitalize',
        fontFamily: typography.normal
    },
    price:{
        color: colors.marine,
        fontFamily: typography.bold,
        marginTop: 11,
        fontSize: 20
    },
    gridCardContainer:{
        marginLeft: 17,
        marginTop: 30
    },
    gridImage:{
        height: 163,
        width: 161
    },
    gridTextContainer:{
        backgroundColor: colors.white,
        width: 161,
        height: 85,
        padding: 10
    },
    gridTitle:{
        fontFamily: typography.semi,
        fontSize: 14,
    },
    gridPrice:{
        color: colors.marine,
        fontFamily: typography.bold,
        marginTop: 8,
        fontSize: 16
    }
})