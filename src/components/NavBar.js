import styled from "styled-components"

const NavBar = ({basket}) => {

    const basketTotal = basket.length

    const NavBar = styled.div`
    display: flex;
    `

    return (
        <NavBar>
            <p>Home</p>
            <p>Basket {(basketTotal) ? ({basketTotal}) : null}</p>
        </NavBar>
    )
}

export default NavBar