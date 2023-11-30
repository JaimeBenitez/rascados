import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native';
import { AppContext } from '../../context/AppContext';
import ItemSeparator from '../../components/ItemSeparator';
import ProductTrolleyCard from '../../components/ProductTrolleyCard/ProductTrolleyCard';
import { Product } from '../../interfaces/productInterfaces';
import { StackScreenProps } from '@react-navigation/stack';
import { TabParams } from '../../navigator/Navigator';
import Button from '../../components/Button/Button';
import { styles } from './TrolleyScreen-style';


interface Props extends StackScreenProps<TabParams,'Cart'>{}

const TrolleyScreen = ( {navigation}:Props) => {
  const { trolleyItems } = useContext(AppContext)
  const [ trolleyList, setTrolleyList ] = useState(trolleyItems)
  
  const removeRepeatedItems = () => {
    let newArrayList: Product[] = []
    trolleyItems.forEach(obj =>{
      if(!newArrayList.some(item => item.title === obj.title)){
        newArrayList.push({...obj})
      }
    })
    setTrolleyList(newArrayList)
  }
  useEffect(()=>{
    removeRepeatedItems()
  },[])
  useEffect(()=>{
    removeRepeatedItems()
  },[trolleyItems])
  
  if(trolleyList.length > 0){
      return (
    <View style={{ marginRight: 25, marginLeft: 20}}>
      <FlatList
        key={'trolley'}
        data={trolleyList}
        keyExtractor={(product) => product.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <ProductTrolleyCard product={item}  /> 
        )}
        ItemSeparatorComponent={ () =>  <ItemSeparator />}
          
      />
    </View>
  )
        }
  else{
    return(
      <View style={styles.container}>
        <Text style={styles.text}>El carrito esta vacío</Text>
        <Button text='Añadir productos al carrito' onPressEffect={() => {navigation.navigate('Product')}} style={styles.button} hasHoverEffect={false} />
      </View>
    )
  }

}

export default TrolleyScreen
