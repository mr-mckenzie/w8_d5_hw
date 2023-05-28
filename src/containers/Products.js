import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const Products = ({products, basket, setBasket}) => {

    const productCards = products.map((product) => {
        return <ProductCard key={product.id} product={product} basket={basket} setBasket={setBasket}/>
    })

    console.log("products", products)

    console.log("productCardType:", typeof(productCards), productCards)

    const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-evenly
    `


 return(
    <CardContainer>
        {productCards}
    </CardContainer>
 )   
}

export default Products