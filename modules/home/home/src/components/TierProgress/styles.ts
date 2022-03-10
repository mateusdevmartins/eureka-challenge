import styled from 'styled-components';

export const GenericText = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  margin: 0px;
  align-items: center;
  color: #16325c;
`;

export const NextTierText = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  display: flex;
  margin: 2px;
  color: #b5bac8;
  align-items: center;
`;

export const NextTierValue = styled(NextTierText)`
  color: #16325c;
`;

export const TierProgressView = styled.div`
  display: flex;
  margin-top: 4px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TierView = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const CurrentTierView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NextTierView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TierProgressBarView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProgressBarSegmentView = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SegmentDivider = styled.div`
  height: 2px;
  margin-left: 4px;
  border-radius: 100px;
  flex: 1;
  margin-right: 4px;
  background-color: #b5bac8;
`;
