import { Avatar } from '..';
import { Pressable } from '../Pressable/Pressable';
import { ListItemContainer, ListItemView, PositionView } from './styles';

export interface ListItemProps {
  image?: string;
  position: number;
  name: string;
  points: number;
  onClick: (item: any) => void;
}

export function ListItem({
  image,
  position,
  name,
  points,
  onClick,
}: ListItemProps) {
  return (
    <Pressable onPress={onClick}>
      <ListItemContainer>
        <PositionView>{position}</PositionView>
        <Avatar size="24px" image={image} />
        <ListItemView style={{ marginLeft: '8px' }}>{name}</ListItemView>
      </ListItemContainer>
      <div>
        <ListItemView style={{ marginRight: '6px' }}>{points}</ListItemView>
      </div>
    </Pressable>
  );
}
