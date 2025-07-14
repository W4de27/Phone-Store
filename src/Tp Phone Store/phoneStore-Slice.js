import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    database : [],
    carts : []
}

const PhoneStore = createSlice({
    name: "PhoneStore",
    initialState,
    reducers : {
        setDatabase : (state , action) => {
            state.database = action.payload;
        },
        addCarts : (state , action) => {
            const newCart = state.carts.find(cart => cart.id === action.payload.id)
            if(newCart){
                newCart.quantity = newCart.quantity + action.payload.quantity
            }else{
                state.carts.push({...action.payload})
            }
        },
        deleteCart : (state , action) => {
            state.carts = state.carts.filter(cart => cart.id!== action.payload)
        },
        DeleteAllCarts : (state) => {
            state.carts = []
        }
    }
})
export const {setDatabase, addCarts, deleteCart , DeleteAllCarts } = PhoneStore.actions
export default PhoneStore.reducer