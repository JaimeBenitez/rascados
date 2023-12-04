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
import storage from '../../storage/storage';
import Toast from 'react-native-toast-message';


interface Props extends StackScreenProps<TabParams,'Cart'>{}

const TrolleyScreen = ( {navigation}:Props) => {
  const [RPGastado, setRPGastado] = useState(0)
  const { appState: { RP },trolleyItems, setRP, cleanProducts } = useContext(AppContext)
  const [ trolleyList, setTrolleyList ] = useState(trolleyItems)
  const [ totalPrice, setTotalPrice ] = useState(RPGastado)
  
  const removeRepeatedItems = () => {
    let newArrayList: Product[] = []
    trolleyItems.forEach(obj =>{
      if(!newArrayList.some(item => item.title === obj.title)){
        newArrayList.push({...obj})
      }
    })
    setTrolleyList(newArrayList)
  }
  const calcTotalPrice = () => {
    let totalInitialPrice = 0

    trolleyItems.forEach(obj => {
      totalInitialPrice += obj.price
    })
    setTotalPrice(totalInitialPrice)
  }
  useEffect(()=>{
    loadData()
    removeRepeatedItems()
    calcTotalPrice()
  },[])
  useEffect(()=>{
    removeRepeatedItems()
    calcTotalPrice()
  },[trolleyItems])

  const loadData = async() => {
    await storage
    .load({
      key: 'RPGastado'
    })
    .then(ret => {
      // found data goes to then()
      setRPGastado(ret)
    })
    .catch(err => {
      // any exception including data not found
      // goes to catch()
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // TODO;
          break;
        case 'ExpiredError':
          // TODO
          break;
      }
    });
    }
  const storeData = () => {
    console.log('New RP ' + (RPGastado + totalPrice))
    storage.save({
      key: 'RPGastado', 
      data: (totalPrice + RPGastado),
      expires: null
    });
    setTrolleyList([])
    setRP(RP - (totalPrice))
    Toast.show({
      type: "error",
      text2: 'Pedido realizado',
      topOffset: 50,
    })
    cleanProducts()
  };

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
      <Button text={`Realizar pedido por ${totalPrice} RP`} onPressEffect={storeData} style={styles.button} hasHoverEffect={false} />

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
