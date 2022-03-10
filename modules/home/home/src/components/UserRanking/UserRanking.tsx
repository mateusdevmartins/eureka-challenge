import { User } from '@fieloapp/homestore';
import { ContentContainer, ListItem, ListTitle } from '@fieloapp/uikit';

export interface UserRankingProps {
  userList: Array<User>;
  onSelectUser: (user: User) => void;
}

export function UserRanking({ userList, onSelectUser }: UserRankingProps) {
  return (
    <ContentContainer>
      <ListTitle position="Pos." name="Member" points="Points" />
      {userList.map((user, index) => {
        return (
          <ListItem
            onClick={() => onSelectUser(user)}
            key={user.id}
            position={index + 1}
            name={user.name}
            points={user.balance.points}
            image={user.image}
          />
        );
      })}
    </ContentContainer>
  );
}
