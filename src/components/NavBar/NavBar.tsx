import React, {useState} from "react"
import { Link } from "react-router-dom"
import { FaBars, FaHome, FaUserAlt, FaCode, FaPhoneAlt  } from 'react-icons/fa'
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { Navbar, Menulinks, Navmenu, NavItems, NavToggle, NavText, NavSpan } from './styles'
import { NavDropdown } from "./NavDropdown";
export function NavBar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [active, setActive]  = useState<any>([])
    const activeDrop = (id:string) => {   
        if (active.includes(id)) {
            setActive((prev:any) => prev.filter((v:any) => v !== id ))
        } else {
            setActive((prev:any) => [...prev, id] )
        }
    }
    return(
        <>
            <Navbar>
                <Menulinks to='#'>
                    <FaBars onClick={showSidebar}/> 
                </Menulinks>
            </Navbar>
            <Navmenu active={sidebar}>
                <NavItems>
                    <NavToggle className="nav-toggle">
                        <Menulinks to='#'>
                            <AiOutlineClose onClick={showSidebar}/>
                        </Menulinks>
                    </NavToggle>
                    <NavText>
                        <Link to='#'>
                            <FaHome /> <NavSpan>Home</NavSpan>
                        </Link>
                    </NavText>
                    <NavText>
                        <Link to='#'>
                            <FaUserAlt /> <NavSpan>Sobre</NavSpan>
                        </Link>
                    </NavText>
                    <NavText>
                        <Link to='#' onClick={ () => activeDrop('projetos') }>
                            <FaCode /> <NavSpan>Projetos</NavSpan>
                        </Link>
                    </NavText>
                    {active.includes('projetos') && <NavDropdown />}
                    <NavText>
                        <Link to='#'>
                            <FaPhoneAlt /> <NavSpan>Contato</NavSpan>
                        </Link>
                    </NavText>
                </NavItems>
            </Navmenu>
        </>
    )
}