import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { Spinner } from "../Common/Styles";
import LinkData from "../Common/LinkData";
import {
  Container,
  Heading,
  SearchContainer,
  SearchInput,
  TeamsContainer,
} from "./Styles";

type Teams = {
  id: string;
  name: string;
};

export default function Dashboard() {
  const [teams, setTeams] = useState<Teams[]>([]);
  const [filterTeams, setFilterTeams] = useState<Teams[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  // Filter teams data using name
  const filterdata = () =>
    teams.filter((team) =>
      team.name.toLowerCase().startsWith(searchText.toLocaleLowerCase())
    );

  useEffect(() => {
    // get teams data
    fetchData("teams")
      .then((data: React.SetStateAction<Teams[]>) => setTeams(data))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (searchText === "") {
      teams && setFilterTeams(teams);
    }
    setFilterTeams(filterdata());
  }, [searchText, teams]);

  return (
    <Container>
      <Heading>Dashboard</Heading>
      <SearchContainer>
        <SearchInput
          name="searchText"
          value={searchText}
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </SearchContainer>
      <Heading>Teams</Heading>
      <TeamsContainer>
        {!filterTeams?.length ? (
          <Spinner />
        ) : (
          filterTeams?.map((team) => (
            <LinkData key={team.id} id={team.id} name={team.name} />
          ))
        )}
      </TeamsContainer>
    </Container>
  );
}
