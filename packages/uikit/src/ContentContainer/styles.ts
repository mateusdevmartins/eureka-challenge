import styled from 'styled-components';

export const OutterView = styled.div`
  border-radius: 4px;
  display: flex;
  background-color: #ffffff;
  margin: 0px 22px 0px 22px;
  height: 386px;
  width: 33%;
  @media (max-width: 1100px) {
    width: 90%;
    margin-bottom: 67px;
  }
`;

export const InnerView = styled.div`
  display: flex;
  overflow-y: auto;
  scrollbar-width: auto;
  flex: 1;
  margin: 10px 10px 10px 10px;
  padding: 0px 16px 0px 16px;
  background-color: #ffffff;
  flex-direction: column;
`;
