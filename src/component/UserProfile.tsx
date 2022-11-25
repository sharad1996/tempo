import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

type dataType = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  location: string;
};


const Card = styled.div`  
  width: 450px;
  height: 250px;
  text-align: center;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
 
`
const ProfileContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
`
 const ProfileImage =styled.img` 
    border-radius: 50%;
    width: 120px;
height: 120px;
`
  const Title = styled.h1`  font-size: 20px `
  const Profileinfo =styled.div`
    padding: 0px 20px;
   `
   const Location = styled.h3` font-size: 1.2em;
        color: $maincolor;
        font-style: italic;
    `
  


export default function UserProfile() {
  const [data, setData] = useState<dataType>();
  let { id } = useParams();

  const fetchUserName = (id: string | undefined): any => {
    fetch(`https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.log("Error occur : " + e);
      });
  };

  useEffect(() => {
    fetchUserName(id);
  }, []);

  return (
    <ProfileContainer>
    <Card>
      <ProfileImage alt={data?.displayName + " Img"} src={ '/blank_User.jpeg' } />
      <Title>User Name : {data?.displayName}</Title>
      <Location>Location : {data?.location}</Location>
    </Card>
    </ProfileContainer>
  );
}
