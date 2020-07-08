import {createStore} from 'redux'


export const change_category = (category) => ({
    type: "CHANGE_CATEGORY",
    payload: category
})

export const count_load = () => ({
    type: "COUNT_LOAD"
})

const initialState = { 
    category: "Obroże",
    isloaded: 0
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload
            }

        case "COUNT_LOAD":
            return {
                ...state,
                isloaded: state.isloaded + 1
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
