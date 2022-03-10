import { ReactNode, useState } from 'react';
import { PressableView } from './styles';

export interface PressableProps {
  onPress: any;
  children: ReactNode;
}

export function Pressable({ onPress, children }: PressableProps) {
  const [touched, touchedSet] = useState(false);

  return (
    <PressableView
      data-testid="pressable"
      style={{ opacity: touched ? 0.3 : 1, transition: 'opacity 500ms ease' }}
      onMouseDown={() => touchedSet(true)}
      onMouseUp={() => touchedSet(false)}
      onClick={onPress}
    >
      {children}
    </PressableView>
  );
}
