import { createContext, useState } from "react";
import { Product } from "../interfaces/productInterfaces";



//Definir como se ve, que información tendré aqui
export interface AppState {
    isGrid: boolean;
}

//Estado inicial 
export const appInitialState: AppState = {
    isGrid: false,
}
// Lo usaremos para decirle a React como se ve y que expone el context
export interface AppContextProps {
    appState: AppState;
    gridOn: () => void;
    gridOff: () => void;
    trolleyItems: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    
}

//Crear el contexto, le pasamos asi el parametro para que ts no se queje
export const AppContext = createContext({} as AppContextProps)


//Componente proveedor del estado
export const AppProvider = ({ children }: any ) => {

    const [trolleyItems, setTrolleyItems] = useState<Product[]>([])

    const [appState, setAppState] = useState(appInitialState)

    const gridOn = () => {
        setAppState({ isGrid: true})
    }
    const gridOff = () => {
        setAppState({ isGrid: false })
    }
    const addProduct = (product:Product) => {
        setTrolleyItems([...trolleyItems, product])
    }
    const removeProduct = (product:Product) => {
        const indexToRemove = trolleyItems.findIndex(item => item.title === product.title)
        if(indexToRemove !== -1){
            //Sacamos todo el array excepto el elemento a remover
            const newData = [
                ...trolleyItems.slice(0, indexToRemove),
                ...trolleyItems.slice(indexToRemove + 1)
            ]
            setTrolleyItems(newData)
        }
    }

    return(
        <AppContext.Provider value={{
            appState,
            gridOn,
            gridOff,
            trolleyItems,
            addProduct,
            removeProduct

        }}>
            { children}
        </AppContext.Provider>
    )
}