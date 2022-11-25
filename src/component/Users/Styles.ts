import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  height: 300px;
  text-align: center;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Location = styled.h3`
  font-size: 1.2em;
  color: $maincolor;
  font-style: italic;
`;
