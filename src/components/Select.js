import React, {useState} from 'react'

export default function Select(props) {

    const [active, setactive] = useState("")

    const categories = props.categories.map( el => {

        return (
                <label onClick={ (e) => {props.fun(e.target.value); setactive( prev => !prev )} } key={el}>
                    <p className="category_font" >{el}</p>
                    <input type="radio" value={el} name="category" />
                </label>
        )
    })

    return (
        <form  className="custom_select">
                <span onClick={ (e) => { e.preventDefault(); setactive( prev => !prev ) } } className="category_plate"> 
                    <p className="category_font" >{props.categories[0]}</p> 
                    <i className={`ri-arrow-down-s-line ${active}`}></i> 
                </span>
                <div className={`category_plate_options ${active}`} >
                    {categories}
                </div>
        </form>
    )
}

