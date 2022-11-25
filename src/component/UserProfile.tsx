import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchData from "./UserLink";

type dataType = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  location: string;
};

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
    <div>
      <img alt={data?.displayName + " Img"} src={data?.avatarUrl} />
      <h1>{data?.displayName}</h1>
      <h2>{data?.location}</h2>
    </div>
  );
}
