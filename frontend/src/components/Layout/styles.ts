import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Page = styled.div`
  margin-left: 75px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const PageContent = styled.div`
  flex: 1;
  background-color: var(--light-gray);
`;
