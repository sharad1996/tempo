import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataById } from "../../api";
import Users from "../Users";

type TeamDetailType = {
  id: string;
  name: string;
  teamLeadId: string;
  teamMemberIds: any;
};

export default function TeamDetails() {
  const [data, setData] = useState<TeamDetailType>();
  let { id } = useParams();

  const fetchUserName = (id: string | undefined): any => {
    fetchDataById("teams", id)
      .then((res: React.SetStateAction<TeamDetailType | undefined>) => {
        if (res) {
          setData(res);
        }
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchUserName(id);
  }, []);

  return (
    <>
      <h1>{data?.name}</h1>
      <div>
        {data?.teamMemberIds.map((id: any) => {
          return <Users key={id} id={id} />;
        })}
      </div>
    </>
  );
}
