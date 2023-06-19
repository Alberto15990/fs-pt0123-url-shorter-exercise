import { Link } from "wouter"
import Styled from "./styles"

const NavBar = () =>{
    return(

       <Styled.Nav>
        <Link href='/Login'>Login</Link>
        <Link href='/Register'>Register</Link>
        <Link href='/Panel'>Panel</Link>
        </Styled.Nav>
       
    )
}

export default NavBar