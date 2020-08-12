import React, {useRef} from 'react'

export default function SetColors(props) {

    const refik = useRef()

    const show = () => {
    [...refik.current.children].forEach( el => el.children[0].checked ? ( props.setcolor(el.children[0].value), el.classList.add('choosed_color') ) : el.classList.remove('choosed_color')) 
    }

    return (
        <div className="colors" onClick={ () => show() }  ref={refik} >
            <div className="green"> 
                <input name="color" value="green" type="radio" ></input>
            </div>
            <div className="red"> 
                <input name="color" value="red" type="radio"></input>
            </div>
            <div className="yellow" > 
                <input name="color" value="yellow" type="radio"></input>
            </div>
            <div className="purple"> 
                <input name="color" value="purple" type="radio"></input>
            </div>
            <div className="brown"> 
                <input name="color" value="brown" type="radio"></input>
            </div>
            <div className="pink"> 
                <input name="color" value="pink" type="radio"></input>
            </div>
        </div>
    )
}
