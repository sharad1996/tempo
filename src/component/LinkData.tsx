import React from "react";
import { Link } from "react-router-dom";

export default function LinkData(props: any) {
  const path = props.user ? "/user/" : "/team/";
  return (
    <div>
      <Link to={path + props.id}>{props.name}</Link>
    </div>
  );
}
