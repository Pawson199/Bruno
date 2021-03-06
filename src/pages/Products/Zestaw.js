import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './productsFunctions/itemsGetterHook'
import { Link } from 'react-router-dom'
import {Button} from '../../components/Button'
import SetQuantity from './productsComponents/SetQuantity'
import SetColors from './productsComponents/SetColors'
import SetSizes from './productsComponents/SetSizes'
import {product_to_cart} from '../../redux'
import {connect} from "react-redux"
import countPrice from './productsFunctions/countPrice'

function Zestaw(props) {

    const [item_details, set_item_details] = useState([])
    const [quantity, setquantity] = useState(0)
    const [sizesObroza, setSizeObroza] = useState([])
    const [sizesSmycz, setSizeSmycz] = useState([])
    const [color, setColor] = useState("")
    const [grawer, setgrawer] = useState("")
    const {productName} = useParams()

    useEffect(
        () => {
            getItemHook("Zestawy", productName, set_item_details) 
        },
    [productName])

    const createGrawerValue = (e) => {
        setgrawer( e.target.value )
    }

    console.log(color,quantity, sizesObroza, sizesSmycz)

    return (
        item_details.length > 0 ? 
        <div className="product_container">
            <span className="back_to_offers_button">
                <i></i>
                <Link><p> Wróć do ofert </p></Link>
            </span>
            <div className="product_info_image" >
                <div className="product_gallery" >
                    <img alt="product" src={item_details[0].fields.zdjecie.fields.file.url} />
                </div>
                <div className="product_info_image_info" >
                    <h2>{item_details[0].fields.nazwa}</h2>
                    <div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                               It has survived not only five centuries,
                             but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        <span><p>{countPrice(item_details[0].fields.cena, sizesObroza[0], +sizesSmycz[1])}</p><small>PLN</small></span>
                    </div>
                </div>
            </div>
            <label>
                <h3>
                    Wybierz rozmiar <u>obroży</u>
                </h3>
            </label>
            <SetSizes 
                setSize={setSizeObroza}
                sizes={
                    [ ["XS", '18-27', 1.5], ["S", '25-35', 2], ["M", '33-41', 2],
                    ["L", '38-48', 3], ["XL", '46-58', 3], ["XXL", '56-71', 4] ]
                }
            />
            <label>
                <h3>
                    Wybierz rozmiar <u>smyczy</u>
                </h3>
            </label>
            <SetSizes 
                setSize={setSizeSmycz}
                sizes={
                    [ ["S", 180, 1], ["M", 180, 1.5],
                    ["L", 180, 2], ["XL", 180, 3] ]
                }
            />
            <label>
                <h3>
                    Grawer na obroży
                </h3>
            </label>
            <div className="adresatka_content" >
                <textarea type="text" name="grawer" value={grawer} onChange={ createGrawerValue } ></textarea>
            </div>
            <label>
                <h3>
                    Wybierz kolor
                </h3>
            </label>
            <SetColors setColor={setColor} />
            <label>
                <h3>
                    Ilość
                </h3>
            </label>
            <SetQuantity amount={quantity} setamount={setquantity} />
            <span className="button_add_to_cart" >
                <Button>
                        <button 
                        onClick={ () => {
                            if( quantity === 0 || sizesObroza.length <= 0 || sizesSmycz.length <= 0 || color === "" || grawer === "" ){
                                alert('Zaznacz lub wypełnij wszystkie pola')
                            }
                            else{
                                props.product_to_cart({
                                    name:item_details[0].fields.nazwa,
                                    image: item_details[0].fields.zdjecie.fields.file.url,
                                    sizes:{w: sizesObroza[1], l: sizesObroza[0]},
                                    sizes2:{w: sizesSmycz[1], l: sizesSmycz[0]},
                                    quantity: quantity,
                                    price: countPrice(item_details[0].fields.cena, sizesObroza[0], +sizesSmycz[1]),
                                    color: color,
                                    grawer: grawer,
                                    identifier: Date.now()
                                })
                                alert('Dodałeś produkt!')
                            }
                        }}>
                            <p>Do koszyka</p>
                        </button>
                </Button>
            </span>
        </div>
        :
        <span className="product_spinner" >
            <span ></span>
        </span>
    )
}

export default connect(() => ({}), {product_to_cart})(Zestaw)