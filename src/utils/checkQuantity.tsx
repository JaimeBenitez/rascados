import { Product } from "../interfaces/productInterfaces"

export const checkQuantity = (product: Product, trolleyItems: Product[]): number => {
    let counter = 0
    for(let item of trolleyItems) {
      if(item.title == product.title) {
        counter++
      } 
    }
    return counter
  }