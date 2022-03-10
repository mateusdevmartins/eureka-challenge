import styled from 'styled-components';

export const LogoImage = styled.img`
  align-self: left;
  justify-content: 'flex-start';
  margin: 0px 8px 0px 8px;
  width: 144px;
  heigth: 36px;
  padding: 24px 0px 24px 72px;
`;

export const MainView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-repeat: initial;
`;

export const ContentView = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 67px 22px 67px 22px;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 67px 22px 0px 22px;
  }
`;

export const LogoView = styled.div`
  width: 100%;
  background-color: white;
`;
