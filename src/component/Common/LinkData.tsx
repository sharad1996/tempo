import { Link } from "react-router-dom";
import { LinkContainer } from "./Styles";

export default function LinkData(props: any) {
  const path = props.user ? "/user/" : "/team/";
  return (
    <Link to={path + props.id}>
      <LinkContainer>{props.name}</LinkContainer>
    </Link>
  );
}
