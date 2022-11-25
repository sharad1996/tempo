import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchData from "./UserLink";

type dataType = {
  id: string;
  name: string;
  teamLeadId: string;
  teamMemberIds: any;
};

export default function TeamDetail() {
  const [data, setData] = useState<dataType>();
  let { id } = useParams();

  const fetchUserName = (id: string | undefined): any => {
    fetch(`https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${id}`)
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
      <h1>{data?.name}</h1>
      <div>
        {data?.teamMemberIds.map((id: any) => {
          return <FetchData key={id} id={id} />;
        })}
      </div>
    </div>
  );
}
