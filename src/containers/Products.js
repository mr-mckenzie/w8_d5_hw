import ProductCard from '../components/ProductCard'

const Products = ({products}) => {

    //GIVE EACH PRODUCT A UNIQUE ID FOR MAPPING
    const productCards = products.map((product) => {
        return <ProductCard key={product.id} product={product}/>
    })

    console.log("products", products)

    console.log("productCardType:", typeof(productCards), productCards)


 return(
    <div>
        {productCards}
    </div>
 )   
}

export default Products