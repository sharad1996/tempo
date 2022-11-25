import React, { useEffect, useState } from "react";
import { getTeamsData } from "../api";
import LinkData from './LinkData'


type Teams = {
  id: string,
  name : string 
}

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
 return (<> <div>Dashboard</div>
  <div> 
    <input name='searchText' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    <button onClick={handleSearch}>Search</button>
  </div>
  { 
  filterTeams && filterTeams.map(team=> <LinkData key={team.id} id={team.id} name={team.name}/>) 
  
   }
  
  </>)
}


