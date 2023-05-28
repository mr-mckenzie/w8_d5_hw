import styled from "styled-components"
import {Link} from 'react-router-dom'

const NavBar = ({basket}) => {

    const NavBar = styled.div`
    display: flex;
    `

    return (
        <NavBar>
            <Link to='/'>Home</Link>
            <Link to='/basket'>Basket {(basket.length) ? <sup>({basket.length})</sup> : null}</Link>
        </NavBar>
    )
}

export default NavBar