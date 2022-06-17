import styled, { css } from 'styled-components'
import {Link} from "react-router-dom";
export const Navbar = styled.div`
    background-color: ${props => props.theme.primary};
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const Menulinks = styled(Link)`
    margin-left: 30px;
    font-size: 30px;
    background: none;
    color: #fff ;
`
interface NavActive{
    active:boolean
}
export const Navmenu = styled.nav<NavActive>`
    background-color: ${props => props.theme.primary};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    ${props => props.active && css`
        left: 0;
        transition:350ms;
    `}
`
export const NavItems = styled.ul `
    width: 100%;
`
export const NavToggle = styled.li`
    list-style: none;
    background-color: ${props => props.theme.primary};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const NavText = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    a{
        text-decoration: none;
        color: #fff;
        font-family: 'Baloo 2';
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
        &:hover{
            background-color: ${props => props.theme.second};
            transition: 600ms;
        }
        transition: 500ms;
    }
`   
export const NavSpan = styled.span`
    margin-left: 16px;
`

export const NavDrop = styled.div`
    background-color: ${props => props.theme.three};
`
export const NavDropItems = styled.ul`

`

export const NavDropText = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    left: -100%;
    a{
        text-decoration: none;
        color: #fff;
        font-family: 'Baloo 2';
        font-size: 16px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
        &:hover{
            background-color: ${props => props.theme.second};
            transition: 600ms;
        }
        transition: 500ms;
    }
   
`

export const NavDropSpan = styled.span`

`