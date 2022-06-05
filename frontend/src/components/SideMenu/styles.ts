import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 100%;
  width: 75px;

  background-color: var(--dark-purple);
`;

export const SideBarIcons = styled.div`

  display: flex;
  flex-direction: column;
  padding-top: 15px;

  svg{
    margin-top: 15px;
  }
  flex: 1

`