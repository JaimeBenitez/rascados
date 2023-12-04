import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ProductStackParams } from '../../navigator/Navigator'
import { images } from '../../components/ProductListCard/ProductImages'
import { styles } from './DetailsScreen-style'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/styles'
import Button from '../../components/Button/Button'
import { AppContext } from '../../context/AppContext'
import { checkQuantity } from '../../utils/checkQuantity';

interface Props extends StackScreenProps<ProductStackParams,'DetailsScreen'>{}



const DetailsScreen = ({ route, navigation }: Props) => {
    const {product} = route.params
    const { title, description, type, filename, price, rating} = product
    const { trolleyItems, addProduct, removeProduct } = useContext(AppContext)

    const quantity = checkQuantity(product,trolleyItems)

    
    
  return (
    <View>
      <Image source={images[filename]} style={styles.backgroundImage} blurRadius={5}/>
      <Image source={images[filename]} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.category}>
        <Text style={styles.categoryText}>{type}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 24 }}>
        <Icon name={rating >= 1 ? "star" : 'star-outline'} size={25} color={colors.orangeYellow} />
        <Icon name={rating >= 2 ? "star" : 'star-outline'} size={25} color={colors.orangeYellow} />
        <Icon name={rating >= 3 ? "star" : 'star-outline'} size={25} color={colors.orangeYellow} />
        <Icon name={rating >= 4 ? "star" : 'star-outline'} size={25} color={colors.orangeYellow} />
        <Icon name={rating >= 5 ? "star" : 'star-outline'} size={25} color={colors.orangeYellow} />
      </View>
      <Text style={styles.description}>{description}</Text>
      { quantity == 0 && <Button text={`Añadir por ${price}RP`} onPressEffect={() => {addProduct(product)}} style={styles.button} />}
      { quantity > 0 && (
        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
          <Button text='-' onPressEffect={() => removeProduct(product)} style={{...styles.littleButton, marginRight: 20 }} hasHoverEffect={false}/>
          <Button text={`${quantity} x ${(quantity * product.price).toFixed(0)} RP en el carrito`} onPressEffect={() => {addProduct(product)}} style={styles.button} hasHoverEffect={false} />
          <Button text='+' onPressEffect={() => addProduct(product)} style={{...styles.littleButton, marginLeft: 20}} hasHoverEffect={false} />
        </View>
      )}
      
    </View>
  )
}

export default DetailsScreen
