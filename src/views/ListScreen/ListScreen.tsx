import React, { useContext, useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native';
import DATA from '../../Products/products.json'
import ProductListCard from '../../components/ProductListCard/ProductListCard';
import ItemSeparator from '../../components/ItemSeparator';
import { AppContext } from '../../context/AppContext';
import { ProductStackParams } from '../../navigator/Navigator'
import { StackScreenProps } from '@react-navigation/stack';
import { countDays } from '../../utils/countDays';
import storage from '../../storage/storage';





interface Props extends StackScreenProps<ProductStackParams,'ListScreen'>{}

const ListScreen = ({navigation}: Props) => {
  const data = DATA
  const { appState: { isGrid }, setRP } = useContext(AppContext)
  const RP: number = countDays(new Date())
  const [RPGastado, setRPGastado] = useState(0)

  useEffect( () => {
     
    const loadData = async() => {
      await storage
      .load({
        key: 'RPGastado'
      })
      .then(ret => {
        // found data goes to then()
        console.log("RP Gastado " + ret);
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
    loadData()
  },[])
  useEffect(()=>{
    setRP(RP - RPGastado)
  },[RPGastado])
  
  
  return (
    <View style={{ marginRight: isGrid ? 22 : 14, marginLeft: isGrid ? 5 : 14}}>
      <FlatList
        key={isGrid ? 'grid' : 'list'}
        data={data}
        keyExtractor={(product) => product.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => {  navigation.navigate('DetailsScreen', {product: item})}}>
            <ProductListCard product={item} isGrid={isGrid} /> 
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={ () => {
          if (!isGrid) return( <ItemSeparator />)
          return(<View style={{width: 17}} />)} }
        numColumns={isGrid ? 2 : 1}
      />
    </View>
  )
}

export default ListScreen
