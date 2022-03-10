import { InnerView, OutterView } from './styles';

export interface RadioButtonProps {
  isSelected: boolean;
}

export function RadioButton({ isSelected }: RadioButtonProps) {
  return (
    <OutterView
      data-testid="outter-radio"
      style={{ borderColor: isSelected ? '#1C8EFF' : '#B5BAC8' }}
    >
      <InnerView
        data-testid="inner-radio"
        style={{
          backgroundColor: isSelected ? '#1C8EFF' : 'transparent',
        }}
      />
    </OutterView>
  );
}
