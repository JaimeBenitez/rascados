import React from 'react'
import { styles } from './RegisterInput-style'
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native'
import { colors } from '../../theme/styles'

interface RegisterInputProps {
  placeholder?: string
  marginTop: number,
  keyboardType?: KeyboardTypeOptions
  width?: number
  label: string,
}

const RegisterInput = ({ placeholder = 'Placeholder', marginTop, keyboardType = 'default', width = 358, label }: RegisterInputProps) => {
 
  return (
    <View style={{...styles.registerInputContainer, marginTop: marginTop }}>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
          style={{...styles.inputField, width: width }} 
          placeholder= {placeholder} 
          placeholderTextColor={colors.placeholder2}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType = {keyboardType}
        />
    </View>
  )
}

export default RegisterInput
