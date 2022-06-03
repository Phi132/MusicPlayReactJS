import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ initalState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initalState)}>
            {children}
        </StateContext.Provider>
    )
};
// trả về 1 current state và 1 dispatch (để thêm action làm thay đổi sate)
export const useProviderContext = () => useContext(StateContext);