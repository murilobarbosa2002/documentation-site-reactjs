import React, {useState} from "react"
import { Link } from "react-router-dom"
import { FaCode } from 'react-icons/fa'
import { NavDrop, NavDropItems, NavDropText, NavDropSpan} from './styles'
export function NavDropdown(){
    return(
        <>
            <NavDrop>
                <NavDropItems>
                    <NavDropText>
                        <Link to='#'>
                            <NavDropSpan>Projetos</NavDropSpan>
                        </Link>
                    </NavDropText>
                    <NavDropText>
                        <Link to='#'>
                            <NavDropSpan>Projetos</NavDropSpan>
                        </Link>
                    </NavDropText>
                </NavDropItems>
            </NavDrop>
        </>
    )
}