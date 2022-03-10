import { DividerView } from './styles';

export interface DividerProps {
  margin?: string;
  width?: string;
}

export function Divider({ margin, width }: DividerProps) {
  return (
    <DividerView
      data-testid="divider"
      style={{
        width: width ? width : '90%',
        marginTop: margin ? margin : '0px',
        marginBottom: margin ? margin : '0px',
      }}
    />
  );
}
