import { Dispatch } from 'react'
import { CartItem, ReducerAction } from './types'
import { ADD, REMOVE, CLEAR } from './constants'

export const actions = (dispatch: Dispatch<ReducerAction>) => ({
    addItem: (item: CartItem) => dispatch({ type: ADD, payload: item }),
    removeItem: (id: string) => dispatch({ type: REMOVE, payload: id }),
    clearCart: () => dispatch({ type: CLEAR, payload: null }),
})



