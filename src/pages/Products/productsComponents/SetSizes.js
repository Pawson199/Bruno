import React, {useRef} from 'react'

export default function SetSizes(props) {


    const sizesCollection = useRef()

    const displayChecked = () => {
        [...sizesCollection.current.children].forEach( el => {
            const [ child ] = el.children
            return child.checked 
            ? 
            ( 
                props.setSize([
                    parseInt(child.getAttribute('width')),
                    parseInt(child.getAttribute('length'))
                ]),
                el.classList.add('choosed_size')
            ) 
            : 
            el.classList.remove('choosed_size') 
        })
    }

    const sizes = props.sizes.map( el => 
    <span key={el[0]} > 
        <input name="size" type='radio' width={el[1]} length={el[2]}></input> 
        <b>{el[0]}</b> 
        <small>{el[1]}cm x {el[2]}cm</small>
    </span> 
    )

    return (
        <div className="sizes" onClick={ () => displayChecked() }  ref={sizesCollection} >
            {sizes} 
        </div>
    )
}