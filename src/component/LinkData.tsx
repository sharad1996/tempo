import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
height: 30px;
padding: 12px;
border: 1px solid;
box-shadow: 4px 3px 3px grey;
margin-bottom: 10px;
border-radius: 12px;
width: 300px;
color: #212121;
font-size: 20px;
font-weight: 500;
` 
export default function LinkData(props: any) {
  const path = props.user ? "/user/" : "/team/";
  return (
    <Link to={path + props.id}>
    <LinkContainer >
      {props.name}
    </LinkContainer>
    </Link>
  );
}
