import {createStore} from 'redux'


export const change_category = (category) => ({
    type: "CHANGE_CATEGORY",
    payload: category
})

const initialState = { 
    category: "Obroże"
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe( () => {
    console.log(store.getState())
})

export default store
