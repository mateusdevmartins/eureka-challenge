import { ReactNode } from 'react';
import { InnerView, OutterView } from './styles';

export interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <OutterView data-testid="outter-view">
      <InnerView data-testid="inner-view">{children}</InnerView>
    </OutterView>
  );
}
