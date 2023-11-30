import { Platform } from "react-native"

export const colors = {
    lightNavy: '#18629b',
    white: '#fff',
    placeholder: 'rgba(255,255,255,0.7)',
    placeholder2:'rgba(49,32,32,0.58)',
    marine: '#053c66',
    black58: '#312020',
    black90: '#111111',
    marine2: '#063d67',
    marine3: '#063d67',
    orangeYellow: '#ffa700',
    navy: '#001729',
    black: '#000'
}


export const typography = {
    normal: Platform.select({
        ios: "OpenSans-Regular",
        android: "OpenSans"
    }),
    semi: Platform.select({
        ios: "OpenSans-SemiBold",
        android: "OpenSans"
    }),
    bold: Platform.select({
        ios: "OpenSans-Bold",
        android: "OpenSans"
    })
}