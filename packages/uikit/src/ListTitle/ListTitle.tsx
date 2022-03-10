import { MainView, ListItemContainer, ColumnTitle } from './styles';

export interface ListTitleProps {
  position: string;
  name: string;
  points: string;
}

export function ListTitle({ position, name, points }: ListTitleProps) {
  return (
    <MainView>
      <ListItemContainer>
        <ColumnTitle style={{ width: '24px' }}>{position}</ColumnTitle>
        <ColumnTitle>{name}</ColumnTitle>
      </ListItemContainer>
      <ColumnTitle>{points}</ColumnTitle>
    </MainView>
  );
}
