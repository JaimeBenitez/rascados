import React from 'react'
import { Text, View } from 'react-native'
import { Product } from '../../interfaces/productInterfaces'
import { Image } from 'react-native'
import { styles } from './ProductListCard-style'
import { images } from './ProductImages'

interface Props {
    product: Product;
    isGrid: boolean;
}


const ProductListCard = ({ product, isGrid }: Props) => {

    if (isGrid) {
        return (
            <View style={styles.gridCardContainer}>
                <Image source={images[product.filename]} style={styles.gridImage} />
                <View style={styles.gridTextContainer}>
                    <Text style={styles.gridTitle}>{product.title}</Text>
                    <Text style={styles.gridPrice}>{product.price} RP</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={images[product.filename]} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>{product.type}</Text>
                </View>
                <Text style={styles.price}>{product.price} RP</Text>
            </View>
        </View>
    )
}

export default ProductListCard
