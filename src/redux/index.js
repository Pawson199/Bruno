import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const contentful = require('contentful')

const client = contentful.createClient({
    space: 'f7ius08ge64j',
    environment: 'master',
    accessToken: 'LCdJVL6-l_G8pEUS8U_0qhaMO0dUv417XCaMSLn4caY'
  })

export const change_category = (category) => {
    
    return (dispatch) => {

        client.getEntries({content_type: category === "Obroże" ? "Obroze" : category })
        .then((response) => { 
            console.log(response)
          const products_new =  response.items.map( el =>
          ({
            id: el.sys.id,
            cena: el.fields.cena,
            category: el.fields.kategoria,
            nazwa: el.fields.nazwa,
            photo_url: el.fields.zdjecie.fields.file.url 
          })
          )
          dispatch({
            type: "CHANGE_CATEGORY",
            payload: products_new
          })
          })
        .catch(console.error)
    }
}

export const product_to_cart = (product) => ({
    type: "PRODUCT_TO_CART",
    payload: product
})

export const count_load = () => ({
    type: "COUNT_LOAD"
})

export const setdeliviery = (d_price) => ({
    type: "SET_DELIVIERY",
    payload: d_price
})

export function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_THING",
        payload: thing
    }
}

export const change_category_name = (category) => ({
    type: "CHANGE_CATEGORY_NAME",
    payload: category
})

const initialState = { 
    products: [],
    isloaded: 0,
    category: "Obroże",
    center_class: "center",
    deliviery: 0,
    cart: []
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {
                ...state,
                products: action.payload,
                center_class: "no-center"
        }

        case "PRODUCT_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
        }

        case "REMOVE_THING": {          
                const newCart = state.cart.filter( el => el.identifier !== action.payload )  
            return{
                ...state,
                cart: newCart
            }
        }

        case "COUNT_LOAD":
            return {
                ...state,
                isloaded: state.isloaded + 1
        }

        case "SET_DELIVIERY":
            return {
                ...state,
                deliviery: action.payload
            }

        case "CHANGE_CATEGORY_NAME":
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe( () => {
    console.log(store.getState())
})

export default store
