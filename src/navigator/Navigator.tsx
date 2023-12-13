import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/LoginScreen/LoginScreen';
import PasswordForgottenScreen from '../views/PasswordForgottenScreen/PasswordForgottenScreen';
import RegisterScreen from '../views/RegisterScreen/RegisterScreen';
import { colors, typography } from '../theme/styles';
import  Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../views/ListScreen/ListScreen';
import CartScreen from '../views/TrolleyScreen/TrolleyScreen';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Product } from '../interfaces/productInterfaces';
import DetailsScreen from '../views/DetailsScreen/DetailsScreen';


export type LandingStackParams = {
  LoginScreen : undefined,
  PasswordForgottenScreen: undefined,
  RegisterScreen: undefined,
  Dashboard: undefined
}
export type ProductStackParams = {
  ListScreen: undefined,
  DetailsScreen: {product: Product}
} 

export type TabParams = {
  Producto: undefined,
  Cart: undefined
}

const Stack = createStackNavigator<LandingStackParams>();
const Tab = createBottomTabNavigator();
const ProductStack = createStackNavigator<ProductStackParams>();

export const LandingNavigator = () => {
  return (
    <Stack.Navigator
     screenOptions={{
      cardStyle:{
         backgroundColor: 'rgba(6,61,103,0.05)'
      }
     }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PasswordForgottenScreen" component={PasswordForgottenScreen} options={{headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={({navigation}) => ({headerStyle:{ 
        backgroundColor: colors.marine2,
        height: 50
        },
        headerTitle: "Registro",
        headerLeft: () => { return (
        <TouchableOpacity onPress={ () => navigation.navigate('LoginScreen')}>
        <Icon name="arrow-back-outline" size={36} color="white" style={{ marginLeft: 24}}/>
        </TouchableOpacity>
         )},
        headerTitleStyle:{
          fontSize: 20,
          color: colors.white,
          fontFamily: typography.bold
        }
      })} />
      <Stack.Screen name="Dashboard" component={DashboardNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export const DashboardNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.marine,
    }}>
      <Tab.Screen name="Producto" component={ProductStackNavigator} options={{headerShown: false,
        tabBarIcon: ({size, color}) => (
          <Icon name='list-outline' size={size} color={color} />
        )
        }} 
        />
      <Tab.Screen name="Cart" component={CartScreen} options={{headerStyle: {
        backgroundColor: colors.marine2,
        height: 50
        },
        headerTitle: 'Carrito',
        title: 'Carrito',
        headerTitleStyle:{
          fontSize: 20,
          color: colors.white,
          fontFamily: typography.bold
        },
        tabBarIcon: ({size, color}) => (
          <Icon name='cart-outline' size={size} color={color} />
        )
        }} />
    </Tab.Navigator>
  );
}

export const ProductStackNavigator = () => {
  const  {appState: { isGrid, RP }, gridOn, gridOff}  = useContext(AppContext)
  let rp = RP.toString()
  return(
    <ProductStack.Navigator>

      <ProductStack.Screen name="ListScreen" component={ListScreen} options={{headerStyle: {
        backgroundColor: colors.marine2,
        height: 50
        },
        headerTitle: 'Listado',
        title: 'Listado',
        headerTitleStyle:{
          fontSize: 20,
          color: colors.white,
          fontFamily: typography.bold
        },
        headerRight: () => { return(
          <View style={{ flexDirection:'row'}}>
            <Text style={{ color: colors.white, fontSize: 20, marginTop: 5, marginRight: 5}}>{rp} RP</Text>
            <TouchableOpacity onPress={ gridOff } style={isGrid ? {...styles.headerButton} : { ...styles.headerButton, ...styles.headerButtonActive }}>
              <Icon name="list-outline" color={isGrid ? colors.marine2 : colors.white } size={24} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={ gridOn } style={isGrid ? { ...styles.headerButton, ...styles.headerButtonActive, marginRight: 20 } : { ...styles.headerButton, marginRight: 20 }}>
              <Icon name="grid-outline" color={isGrid ? colors.white : colors.marine2} size={24} />
            </TouchableOpacity>
          </View>
        )},
        headerLeft: () => null }}/>
        <ProductStack.Screen
        name="DetailsScreen" component={DetailsScreen} 
        options={({navigation}) => ({headerStyle:{ 
          backgroundColor: colors.marine2,
          height: 50
          },
          headerTitle: "Detalle Producto",
          headerLeft: () => { return (
          <TouchableOpacity onPress={ () => navigation.navigate('ListScreen')}>
          <Icon name="arrow-back-outline" size={36} color="white" style={{ marginLeft: 24}}/>
          </TouchableOpacity>
           )},
          headerTitleStyle:{
            fontSize: 20,
            color: colors.white,
            fontFamily: typography.bold
          }
        })}
        />
    </ProductStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: 'white', 
    width: 48,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerButtonActive: {
    backgroundColor: colors.marine2
  }
})