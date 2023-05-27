import styled from "styled-components"

//    {id: 1000,
//     name: 'Kenya',
//     price_per_kg: 5.00,
//     description: '',
//     kg_in_stock: 7.5,
//     roast: 'medium',
//     image: '?????????????????????'
//     },



const ProductCard = ({product}) => {
    
    const Card = styled.div`
    display: flex;
    flex-direction: column;
    `

    return (
        <Card>
            <p>IMAGE</p>
            <p>{product.name}</p>
            <p>DESC{product.description}</p>
            <p>Price per kg: £{product.price}</p>
            <form>
                <label>
                    Quantity(kg):<input type='number' required/> 
                </label>
                <label>
                    would you like it ground? <input type='checkbox'/>
                </label>
                <input type="submit" value="Add to Basket"/>
            </form>
        </Card>
    )

}

export default ProductCard