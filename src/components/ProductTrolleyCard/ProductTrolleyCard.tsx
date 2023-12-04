import React, { useContext } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Product } from '../../interfaces/productInterfaces'
import { styles } from './ProductTrolleyCard-style'
import { images } from '../ProductListCard/ProductImages'
import { AppContext } from '../../context/AppContext'
import { checkQuantity } from '../../utils/checkQuantity'
import Button from '../Button/Button'

interface Props {
    product: Product
}

const ProductTrolleyCard = ({ product }: Props) => {

    const { trolleyItems, addProduct, removeProduct } = useContext(AppContext)

    const quantity = checkQuantity(product,trolleyItems)

  return (
    <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
             <Image source={images[product.filename]} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{(quantity * product.price).toFixed(0)} RP</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Button text='-' onPressEffect={() => { removeProduct(product)}} hasHoverEffect={false} style={styles.littleButton} />
              <View style={styles.quantityNumberContainer}>
                <Text style={styles.quantity}>{quantity}</Text>
              </View>
              <Button text='+' onPressEffect={() => { addProduct(product)}} hasHoverEffect={false} style={styles.littleButton} />
            </View>
            
    </View>
  )
}

export default ProductTrolleyCard
