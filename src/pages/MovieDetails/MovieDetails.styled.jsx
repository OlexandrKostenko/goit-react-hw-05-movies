import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
margin: 20px 0 10px 0;
display: flex;
border-bottom: 1px solid black;`;

export const LinkWrapper = styled.div`
padding-bottom: 20px;
border-bottom: 1px solid black`;

export const Link = styled(NavLink)`
padding: 10px;
margin: 10px;
text-decoration: none;
background-color: orange;
border-radius: 4px;
width: 80px;

&.active {
    background-color: #ab810f;
    color: white;
}

:hover{
    background-color: blue;
    color: white;
}`;

export const Image = styled.img`
margin 10px;`