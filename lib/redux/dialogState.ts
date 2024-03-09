import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialState:any = {
    payTokenDialog:false,
    recieveTokenDialog:false
}

const  dialogState = createSlice({
    name:"dialogState",
    initialState,
    reducers:{
        setPayTokenDialog:(state,action:PayloadAction<any>)=>{
            state.payTokenDialog = action.payload;
        },
        setRecieveTokenDialog:(state,action:PayloadAction<any>)=>{
            state.recieveTokenDialog = action.payload;
        },
    }
});


export const {setPayTokenDialog,setRecieveTokenDialog} = dialogState.actions;

export default dialogState.reducer;