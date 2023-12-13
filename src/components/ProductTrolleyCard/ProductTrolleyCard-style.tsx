import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme/styles";

export const styles = StyleSheet.create({
    cardContainer:{
        marginVertical: 27,
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
        width: 107, 
        height: 107,
        borderRadius: 6
    },
    textContainer:{
        marginLeft: 16,
        justifyContent: 'center'
    },
    quantityContainer:{
        marginLeft: 16,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        top: 25
    },
    title:{
        fontFamily: typography.semi,
        fontSize: 16,
        marginBottom: 6,
        color: 'black'
    },
    category:{
        backgroundColor: colors.marine,
        height: 24,
        borderRadius: 2,
        width: 79,
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
    littleButton: {
        backgroundColor: 'transparent',
        paddingTop: 12,
        marginHorizontal: 5 ,
        width: 12
    },
    quantity: {
        color: colors.white,
        fontFamily: typography.bold,
        fontSize: 16,
        width: 34,
        height: 34,
        borderRadius: 100,
        textAlign: 'center',
        paddingTop: 5
    },
    quantityNumberContainer: {
        backgroundColor: colors.marine,
        borderRadius: 100,
        // paddingTop: 5,
        marginTop: 15
    }
})