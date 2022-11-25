import React from "react"
import { Link } from "react-router-dom"

export default function LinkData (props:any){
  return <div>
  <Link to={'/team/'+props.id}>
  {props.name}
  </Link>
  </div>
}