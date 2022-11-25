import { useEffect, useState } from "react";
import LinkData from "../Common/LinkData";
import { fetchDataById } from "../../api";

type UserDetailsType = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  location: string;
};

type UsersType = {
  id: string;
};

export default function Users(props: UsersType) {
  const [data, setData] = useState<UserDetailsType>();
  const userId = props.id;

  useEffect(() => {
    fetchDataById("users", userId)
      .then((res: React.SetStateAction<UserDetailsType | undefined>) => {
        if (res) {
          setData(res);
        }
      })
      .catch((e) => console.error(e));
  }, []);

  return <div>{<LinkData id={userId} name={data?.firstName} user />}</div>;
}
