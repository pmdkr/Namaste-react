import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //mutating the state here

        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state)=>{

            state.items.pop()
        },
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, clearItem }=cartSlice.actions;