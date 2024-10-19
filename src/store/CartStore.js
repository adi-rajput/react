import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items.pop();
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions;