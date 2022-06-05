import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 100%;
  width: 75px;
  position: fixed;
  background-color: var(--dark-purple);

  @media (max-width: 600px) {
    display: none;
  }

`;

export const SideBarIcons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  svg {
    margin-top: 15px;
  }
  flex: 1;
`;
