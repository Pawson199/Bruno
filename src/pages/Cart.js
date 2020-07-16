import React from 'react'

function Cart(props) {
    return (
        <div>
            <h1>Koszyk</h1>
        </div>
    )
}

export default connect(state => (
    {
      isloaded: state.isloaded
    }
  ), {count_load})(Cart)