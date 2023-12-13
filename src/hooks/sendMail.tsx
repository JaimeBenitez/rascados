import qs from 'qs';
import { Linking } from 'react-native';

export async function sendEmail(to: String, subject: String, body: String, options = {}) {
    

    let url = `mailto:${to}?subject=${subject}&body=${body}`;
    
    console.log("url: " + url)
    // check if we can use this link
    // const canOpen = await Linking.canOpenURL(url);

    // console.log(canOpen)

    // if (!canOpen) {
    //     throw new Error('Provided URL can not be handled');
    // }

    return Linking.openURL(url);
}