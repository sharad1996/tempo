import {TEAMS_API} from '../config'

export function getTeamsData ():any {
  
 return fetch(TEAMS_API)
  .then(res=> res.json())
  .then(data=>{
    return data})
  .catch(e=> console.error(e
    ))
    
}