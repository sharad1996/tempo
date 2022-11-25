import styled from "styled-components";

export const LinkContainer = styled.div`
  height: 30px;
  padding: 12px;
  border: 1px solid;
  box-shadow: 4px 3px 3px grey;
  margin-bottom: 10px;
  border-radius: 12px;
  width: 300px;
  color: #212121;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background: #add8e6;
  }
`;

export const Spinner = styled.div`
  border: 16px solid #add8e6;
  border-top: 16px blue solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
