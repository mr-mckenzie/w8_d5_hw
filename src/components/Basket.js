const Basket = ({products, basket, setBasket}) => {


    const BasketArray = [...basket]
    let basketTotal = 0

    console.log("basket:", basket, BasketArray)
    console.log(BasketArray.length)
    
    if (BasketArray.length !== 0) {
        basketTotal = BasketArray.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    }
    
    const basketContents = basket.map((basketItem) => {
        return (
            <>
            <h2>Product: {basketItem.product.name}</h2>
            <p>Quantity: {basketItem.quantity}g</p>
            <p>Grind: {basketItem.grind}</p>
            <p>Price: £{basketItem.price}</p>
            </>
        ) 
        
    })
    
    return(
        <>
            <h1>BASKET</h1>
            {basketContents}
            <hr></hr>
            <h3>BASKET TOTAL: £{basketTotal}</h3>
        </>
    )
    
}

export default Basket