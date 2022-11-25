import React, { useEffect, useState } from "react";
import {TEAMS_API} from '../config'
import {Link} from 'react-router-dom'

type Teams = {
  id: string,
  name : string 
}

export default function Dashboard() {
  const [teams,setTeams] = useState<Teams[]>([])
  const [filterTeams,setFilterTeams]=useState<Teams[]>([])
  const [searchText,setSearchText]=useState<string>('');
  
  const handleSearch= ()=>{
   
  //  const filterdata = teams.filter(team=>  team.name.toString().startsWith(searchText))
    console.log(searchText)
    // setFilterTeams(filterdata)
}
  useEffect(()=>{
    fetch(TEAMS_API)
    .then(res=> res.json())
    .then(data=>setTeams(data))
  },[])
  
 
 return (<> <div>Dashboard</div>
  <div>
    <input name='searchText' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    <button onClick={handleSearch}>Search</button>
  </div>
  {/* {searchText !== '' && filterTeams && filterTeams.map(team=> <LinkData id={team.id} name={team.name}/>)
    } */}

    {teams && teams.map((team)=> <LinkData id={team.id} name={team.name}/>)}
  
  </>)
}

const LinkData = (props:any)=>{
  return <div>
  <Link to={'/team/'+props.id}>
  {props.name}
  </Link>
  </div>
}
