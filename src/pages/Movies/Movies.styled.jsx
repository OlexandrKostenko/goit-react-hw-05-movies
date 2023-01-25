import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
list-style-type: none;
width: 300px;
padding: 4px;
margin: 4px;
border-radius: 2px;
background-color: #e3e2de;`;

export const LinkItem = styled(Link)`
text-decoration: none;
color: black;

:hover {
    background-color: #c2c1bc;
}`;

export const Input = styled.input`
margin-left: 44px;
width: 230px;`

export const ButtonSubmit = styled.button`
margin-left 15px;
padding 2px;`