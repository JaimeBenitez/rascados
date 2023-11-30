import React from 'react'
import { Text, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../theme/styles'
import { styles } from './PasswordForgottenScreen-style'
import Button from '../../components/Button/Button'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack'
import { LandingStackParams } from '../../navigator/Navigator'


interface Props extends StackScreenProps<LandingStackParams, 'PasswordForgottenScreen'>{}

const PasswordForgottenScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={ [colors.navy,colors.lightNavy] } style={ styles.passwordForgottenContainer }>
      <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('LoginScreen')}} style={styles.backArrow}>
        <Icon name="arrow-back-outline" size={36} color="white" />
      </TouchableOpacity>
      <Text style={ styles.titleText }>¿No recuerdas tu contraseña?</Text>
      <Text style={ styles.text }>Introduce tu email y te enviaremos enlace de restablecimiento</Text>
      <TextInput 
        style={styles.inputField} 
        placeholder='Email' 
        placeholderTextColor={colors.placeholder}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Button onPressEffect={()=>{}} text="Continuar" style={ styles.continueButton} />
    </LinearGradient>
  )
}

export default PasswordForgottenScreen
