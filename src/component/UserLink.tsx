import React, { useEffect, useState } from "react";
import LinkData from "./LinkData";
type propsId = {
  id: string;
};
export default function UserLink(props: propsId) {
  const [data, setData] = useState<string>();
  const userId = props.id;
  useEffect(() => {
    fetch(
      `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/${userId}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.displayName);
      })
      .catch((e) => {
        console.log("Error occur : " + e);
      });
  }, []);
  console.log(userId, "userID");
  return <div>{<LinkData id={userId} name={data} user />}</div>;
}
