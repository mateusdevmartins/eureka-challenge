import { User } from '@fieloapp/homestore';
import { images } from '@fieloapp/uikit';
import { ValuesView, ValueItemView, GenericText, ValueTitle } from './styles';

const { points, dolar } = images;

export interface UserTierProps {
  selectedUser: User;
}

export function UserTier({ selectedUser }: UserTierProps) {
  return (
    <ValuesView>
      <ValueItemView>
        <GenericText>
          <img style={{ marginRight: '4px' }} src={points} alt={'Points'} />
          {selectedUser?.balance.points}
        </GenericText>
        <ValueTitle>Points</ValueTitle>
      </ValueItemView>
      <ValueItemView>
        <GenericText>{selectedUser?.balance.miles}</GenericText>
        <ValueTitle>Miles</ValueTitle>
      </ValueItemView>
      <ValueItemView>
        <GenericText>
          <img style={{ marginRight: '4px' }} src={dolar} alt={'Currency'} />
          {selectedUser?.balance.currency.toFixed(0)}
        </GenericText>
        <ValueTitle>Currency</ValueTitle>
      </ValueItemView>
    </ValuesView>
  );
}
