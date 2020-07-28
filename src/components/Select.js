import React, {useState} from 'react'

export default function Select(props) {

    const [active, setactive] = useState("")

    const categories = props.categories.map( el => {

        return (
                <label onClick={ (e) => {props.fun(e.target.value); props.cat(el[1]); setactive( prev => !prev )} } key={el}>
                    <p className="category_font" >{el[0]}</p>
                    <input type="radio" value={el[0]} name="category" />
                </label>
        )
    })

    return (
        <form  className="custom_select">
                <span onClick={ (e) => { e.preventDefault(); setactive( prev => !prev ) } } className="category_plate"> 
                    <p className="category_font" >{ props.category_name === 'Obroze' ? "Obroże" : props.category_name}</p> 
                    <i className={`ri-arrow-down-s-line ${active}`}></i> 
                </span>
                <div className={`category_plate_options ${active}`} >
                    {categories}
                </div>
        </form>
    )
}

