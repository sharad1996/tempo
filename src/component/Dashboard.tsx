import React, { useEffect, useState } from "react";
import { getTeamsData } from "../api";
import LinkData from './LinkData'
import styled from 'styled-components'


type Teams = {
  id: string,
  name : string 
}

const Container = styled.div`
display : flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}
`

const Heading = styled.h1``
const SearchContainer = styled.div`
padding : 20px;
`
const SearchInput = styled.input`
height: 23px;
width:250px;
`
const TeamsContainer = styled.div`display: flex;
flex-wrap: wrap;
justify-content: space-around;
    gap: 20px;
    
    `

export default function Dashboard() {
  const [teams,setTeams] = useState<Teams[]>([])
  const [filterTeams,setFilterTeams]=useState<Teams[]>([])
  const [searchText,setSearchText]=useState<string>('');
  
  const filterdata =()=> teams.filter(team=>  team.name.toLowerCase().startsWith(searchText.toLocaleLowerCase()))

  const handleSearch= ()=>{
    setFilterTeams(filterdata())
}
  useEffect(()=>{
    getTeamsData().then((data: React.SetStateAction<Teams[]>)=>setTeams(data));
  },[])
  
 useEffect(()=>{
  if(searchText === ''){
   teams &&setFilterTeams(teams)
  }
  setFilterTeams(filterdata())
 },[searchText,teams])

 console.log('teamdata',teams)
 return (<Container> 
  <Heading>Dashboard</Heading>
  <SearchContainer> 
    <SearchInput name='searchText' value={searchText} placeholder='Search...' onChange={(e)=>{setSearchText(e.target.value)}}/>
    
  </SearchContainer>
  <TeamsContainer>
  { 
  filterTeams && filterTeams.map(team=> <LinkData key={team.id} id={team.id} name={team.name}/>) 
  
   }
  </TeamsContainer>
  </Container>)
}


