import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  ProfileContainer,
  ProfileImage,
  Title,
  Location,
} from "./Styles";
import { fetchDataById } from "../../api";
import { Spinner } from "../Common/Styles";

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

  // CDN images is not working that's why we used some default image.
  return (
    <ProfileContainer>
      <Card>
        <ProfileImage
          alt={data?.displayName + " Img"}
          src={"/blank_User.jpeg"}
        />
        <Container>
          {!data ? (
            <Spinner />
          ) : (
            <>
              <Title>{data?.displayName}</Title>
              <Location>{data?.location}</Location>
            </>
          )}
        </Container>
      </Card>
    </ProfileContainer>
  );
}
