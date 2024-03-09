import { configureStore } from '@reduxjs/toolkit'
import walletState from './walletState'
import dialogState from './dialogState'
import swapState from './swapState'

export const store = configureStore({
  reducer:{
    walletState:walletState,
    dialogState:dialogState,
    swapState:swapState
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }),
})