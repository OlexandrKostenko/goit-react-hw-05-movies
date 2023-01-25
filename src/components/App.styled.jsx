import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
padding: 10px;
margin: 10px;
text-decoration: none;
background-color: orange;
border-radius: 4px;
width: 80px;

&.active {
    background-color: #ab810f;
    color: white;
};

:hover{
    background-color: blue;
    color: white;
};
`;

export const NavWrapper = styled.nav`
margin: 20px 0 20px 0;`;