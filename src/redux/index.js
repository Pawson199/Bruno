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
          const products_new =  response.items.map( el =>
          ({
            id: el.sys.id,
            cena: el.fields.Price,
            nazwa: el.fields.Name,
            photo_url: el.fields.Photo.fields.file.url 
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

export const count_load = () => ({
    type: "COUNT_LOAD"
})


export const change_category_name = (category) => ({
    type: "CHANGE_CATEGORY_NAME",
    payload: category
})

const initialState = { 
    products: [],
    isloaded: 0,
    category: "dog",
    center_class: "center",
    cart: [
        {name:"keweqk1",
        color: "black",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{},
        quantity: 2,
        price: 21
        },
        {name:"kewfdeqk1",
        color: "black",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{},
        quantity: 2,
        price: 21
        },
        {name:"kefdsfweqk1",
        color: "black",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{},
        quantity: 2,
        price: 21
        },
        {name:"kedk1",
        color: "black",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{},
        quantity: 2,
        price: 22
        },
        {name:"kekdsa1",
        color: "black",
        image: "//images.ctfassets.net/f7ius08ge64j/6mKC3fQTH88iKM1N43tPPl/cf05a640ce7737dcb6b536dc5653d7dd/jadzka.jpg",
        sizes:{},
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

        case "COUNT_LOAD":
            return {
                ...state,
                isloaded: state.isloaded + 1
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
