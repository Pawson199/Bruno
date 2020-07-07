import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"


export const change_category = (category) => ({
    type: "CHANGE_CATEGORY",
    payload: category
})

export const get_products = (category) => {

    return (disptach) => {
        fetch(
            'https://graphql.datocms.com/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_PRODUCTS_KEY}`,
              },
              body: JSON.stringify({
                query: '{ allBluzas { id cena nazwa opis zdjCie { url } } }'
              }),
            }
          )
          .then(res => res.json())
          .then((res) => {
                disptach({
                    type: "GET_PRODUCTS",
                    payload: res.data.allBluzas
                })
              
          })
          .catch((error) => {
            console.log(error);
          });
    }

}

const initialState = { 
    category: "Obroże",
    products: []
 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        
        case "GET_PRODUCTS":
            return {
                ...state,
                 products: action.payload
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
