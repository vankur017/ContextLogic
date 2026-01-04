import { createContext, useReducer } from "react";

export const CartContext = createContext({
    cart: [],
    addToCart: ()=>{},
    removeFromCart: ()=>{}
})

const cartReducer = (state, action)=>{

    console.log("Before:", state.items);
    console.log("Action:", action);

    switch(action.type){
        case "ADD_TO_CART":{
            const existingItem = state.items.find((item)=>item.id===action.payload.id);

            if(existingItem){
                return {
                    ...state, 
                    items: state.items.map((item)=>(
                        item.id=== action.payload.id ?
                         {...item, qty: item.qty+1}
                         : item
                    ))
                }
            }
            const updatedState = {
                ...state,
                items:[
                    ...state.items,
                    {...action.payload,qty: 1}
                ]
            }

            console.log("updated context", updatedState);
            
            
           return updatedState
        }

        case "REMOVE_FROM_CART":{
            return {
                ...state,
                items: state.items.filter((item)=>item.id!==action.payload.id)
            }
        }

        case "EMPTY_CART":{
            return {
                ...state,
                items: []
            }
        }
        
    }

}

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer, {items:[]});

    const addToCart = (prod)=>{
        dispatch({type: "ADD_TO_CART", payload: prod})
    }

    return (
        <CartContext.Provider
        
        value={{
            cartItems:state.items,
            addToCart
            }
        }
        
        >
            {children}
        </CartContext.Provider>
    )
}



