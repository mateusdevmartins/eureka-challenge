import { ProgramLevels, Programs, User } from '@fieloapp/homestore';
import { Avatar, ContentContainer, Divider } from '@fieloapp/uikit';
import { TierProgress, UserTier } from '..';

import { UserName, UserProgram } from './styles';

export interface UserProfileProps {
  selectedUser: User;
  userProgram: Programs;
  programLevels: Array<ProgramLevels>;
}

export function UserProfile({
  selectedUser,
  userProgram,
  programLevels,
}: UserProfileProps) {
  return (
    <ContentContainer>
      <Avatar size="42px" image={selectedUser.image} />
      <UserName>{selectedUser.name}</UserName>
      <UserProgram>{userProgram.name}</UserProgram>
      <Divider margin={'24px'} />
      <UserTier selectedUser={selectedUser} />
      <Divider margin={'24px'} />
      <TierProgress selectedUser={selectedUser} programLevels={programLevels} />
      <Divider margin={'29px'} />
    </ContentContainer>
  );
}
