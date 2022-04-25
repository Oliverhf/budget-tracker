import { createContext, useReducer} from "react"


const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {
            id: 12,
            name: 'Shopping',
            cost: 40
        },
        {
            id: 13,
            name: 'Holiday',
            cost: 400
        },
        {
            id: 14,
            name: 'Car service',
            cost: 800
        }
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}