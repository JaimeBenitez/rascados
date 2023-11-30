import React, { useEffect, useState } from 'react'
import {  StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './Button-styles'


interface Props{
    text: string,
    onPressEffect: ()=>void
    style?: StyleProp<ViewStyle> 
    hasHoverEffect?: boolean
}

const Button = ({text, onPressEffect, style, hasHoverEffect=true}: Props) => {

  const [ isActive, setIsActive ] = useState(false)

  useEffect(() => {
    setIsActive(false)
  }, [])
  
  const onPress = () => {
    setIsActive(true)
    onPressEffect()
  } 

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={isActive && hasHoverEffect ? [styles.buttonActive, style] : [styles.button, style]}>
      <Text style={isActive && hasHoverEffect ? styles.textActive : styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
