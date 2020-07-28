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

        client.getEntries({content_type: category})
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

export const getItem = (category1, name_of_item) => {
    
    return (dispatch) => {

        client.getEntries({content_type: category1})
        .then((response) => { 
         const newItem = response.items.filter( el => el.fields.Name === name_of_item )
          dispatch({
            type: "GET_ITEM",
            payload: newItem
          })

          })
        .catch(console.error)
    }

}

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
    oneItem: [],
    isloaded: 0,
    category: "Obroze",
    center_class: "center",
    deliviery: 0,
    cart: [
        {name:"keweqk1",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{w: "20cm", l: "20cm"},
        quantity: 2,
        price: 21
        },
        {name:"kewfdeqk1",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{w: "20cm", l: "20cm"},
        quantity: 2,
        price: 21
        },
        {name:"kefdsfweqk1",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{w: "20cm", l: "20cm"},
        quantity: 2,
        price: 21
        },
        {name:"kedk1",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{w: "20cm", l: "20cm"},
        quantity: 2,
        price: 22
        },
        {name:"kekdsa1",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{w: "20cm", l: "20cm"},
        quantity: 2,
        price: 12
        }
    ]
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {
                ...state,
                products: action.payload,
                center_class: "no-center"
            }

            case "REMOVE_THING": {          
                const newCart = state.cart.filter( el => el.name !== action.payload )  
              return{
                  ...state,
                  cart: newCart
              }
            }

            case "GET_ITEM": {         
              return{
                  ...state,
                  oneItem: action.payload
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
