const contentful = require('contentful')

const client = contentful.createClient({
    space: 'f7ius08ge64j',
    environment: 'master',
    accessToken: 'LCdJVL6-l_G8pEUS8U_0qhaMO0dUv417XCaMSLn4caY'
})

export default function getItem(category1, name_of_item, set_items) {
    client.getEntries({content_type: category1})
        .then((response) => { 
            set_items( response.items.filter( el => el.fields.nazwa === name_of_item ) )
        })
        .catch(console.error)
}