import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/styles'
import { styles } from './LoginScreen-style';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { LandingStackParams } from '../../navigator/Navigator';

interface Props extends StackScreenProps<LandingStackParams, 'LoginScreen'>{}

const LoginScreen = ({navigation}: Props) => {
  return (
    <LinearGradient colors={ [colors.white,colors.lightNavy] } style={ styles.loginContainer }>
      <Image source={require('../../assets/img/group2.png')} style={styles.loginLogo} />
      {/* <TextInput 
        style={styles.inputField} 
        placeholder='Nombre de usuario' 
        placeholderTextColor={colors.placeholder}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput 
        style={styles.inputField} 
        placeholder='Contraseña' 
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('PasswordForgottenScreen')}} style={styles.passwordForgotten}>
        <Text style={styles.linkText}>He olvidado mi contraseña</Text>
      </TouchableOpacity>
      <View style={styles.registerLinkContainer}>
      <Text style={styles.text}>¿Aun no tienes cuenta? </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {navigation.navigate('RegisterScreen')}}>
        <Text style={styles.linkText}>Registrate</Text> 
      </TouchableOpacity>
      
      </View> */}
      <Button onPressEffect={()=>{navigation.navigate('Dashboard')}} text="Quiero ser rascada" style={{ width: 200}} />

    </LinearGradient>
  )
}

export default LoginScreen
