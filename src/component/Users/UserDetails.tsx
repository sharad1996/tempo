import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  ProfileContainer,
  ProfileImage,
  Title,
  Location,
} from "./Styles";
import { fetchDataById } from "../../api";

type UserDetailsType = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  location: string;
};

export default function UserDeatils() {
  const [data, setData] = useState<UserDetailsType>();
  let { id } = useParams();

  const fetchUserName = (id: string | undefined): any => {
    fetchDataById("users", id)
      .then((res: React.SetStateAction<UserDetailsType | undefined>) => {
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
    <ProfileContainer>
      <Card>
        <ProfileImage
          alt={data?.displayName + " Img"}
          src={"/blank_User.jpeg"}
        />
        <Title>User Name : {data?.displayName}</Title>
        <Location>Location : {data?.location}</Location>
      </Card>
    </ProfileContainer>
  );
}
