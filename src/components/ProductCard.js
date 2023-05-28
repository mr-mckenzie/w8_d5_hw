import styled from "styled-components"
import { useState } from "react"

//    {id: 1000,
//     name: 'Kenya',
//     price_per_kg: 5.00,
//     description: '',
//     kg_in_stock: 7.5,
//     roast: 'medium',
//     image: '../coffee.jpg'
//     },

const ProductCard = ({product, basket, setBasket}) => {

    const [quantity, setQuantity] = useState(250)
    const [grind, setGrind] = useState('whole')
    const [price, setPrice] = useState(null)

    const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20em;
    margin: 2em;
    border: solid 2px black;
    `
    const formName = `form${product.id}`
    const id250 = `250${product.id}`
    const id500 = `500${product.id}`
    const id1000 = `1000${product.id}`
    const idWhole = `whole${product.id}`
    const idEspresso = `espresso${product.id}`
    const idFilter = `filter${product.id}`
    const idPlunger = `plunger${product.id}`

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
        setPrice(calculatePrice())
    }

    const handleGrindChange = (event) =>{
        setGrind(event.target.value)
        setPrice(calculatePrice())
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newBasket = [...basket]
        console.log("newBasket:", newBasket)

        const basketObj = {
            'product': product, 
            'quantity':quantity,
            'grind':grind,
            'price':calculatePrice()}

        newBasket.push(basketObj)
        console.log("new bask now:", newBasket)
        setBasket(newBasket)
    }

    const calculatePrice = () => {
        let newPrice = (quantity/1000) * product.price_per_kg 
        if (grind !== 'whole'){
            newPrice = newPrice + 1
        }
        return newPrice
    }

    const isChecked = (prop, value) => {
        if (prop.toString() === value.toString()) {
            return true
        } 
        return false
    }

    return (
        <Card>
            <p>{product.name}</p>
            <img src={product.image}></img>
            <p>{product.description}</p>
            <p>Price per kg: £{product.price_per_kg}</p>
            <form name={formName} onSubmit={handleSubmit}>
                <div>
                    <legend>Quantity:</legend>
                    <label htmlFor={id250}>250g:</label>
                        <input name='quantity' type='radio' id={id250} value='250' onChange={handleQuantityChange} checked={isChecked(quantity, 250)}></input>
                    <label htmlFor={id500}>500g:</label>
                        <input name='quantity' type='radio' id={id500} value='500' onChange={handleQuantityChange} checked={isChecked(quantity, 500)}></input>
                    <label htmlFor={id1000}>1kg:</label>
                        <input name='quantity' type='radio' id={id1000} value='1000' onChange={handleQuantityChange} checked={isChecked(quantity, 1000)}></input>
                </div>

                <div>
                    <p>Beans can be ground (£1 charge). Select your preferred grind below.</p>
                    <legend>Grind:</legend>
                    <label htmlFor={idWhole}>Whole Beans (no grind):</label>
                        <input name='grind' type='radio' id={idWhole} value='whole' onChange={handleGrindChange} checked={isChecked(grind, 'whole')}></input>
                    <label htmlFor={idEspresso}>Espresso:</label>
                        <input name='grind' type='radio' id={idEspresso} value='espresso' onChange={handleGrindChange} checked={isChecked(grind, 'espresso')}></input>
                    <label htmlFor={idFilter}>Filter:</label>
                        <input name='grind' type='radio' id={idFilter} value='filter' onChange={handleGrindChange} checked={isChecked(grind, 'filter')}></input>
                    <label htmlFor={idPlunger}>Plunger:</label>
                        <input name='grind' type='radio' id={idPlunger} value='plunger' onChange={handleGrindChange} checked={isChecked(grind, 'plunger')}></input>
                </div>

                <p>Total: £{calculatePrice()}</p>

                <input type="submit" value="Add to Basket"/>
            </form>
        </Card>
    )

}

export default ProductCard