import renderer from 'react-test-renderer';
import { ContentContainer } from './ContentContainer';

import { render, fireEvent, getByTestId } from '@testing-library/react';

describe('ContentContainer', () => {
  it(' should match snapshot', () => {
    const component = renderer.create(
      <ContentContainer>
        <div></div>
      </ContentContainer>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behavior', () => {
    const components = render(
      <ContentContainer>
        <div></div>
      </ContentContainer>
    );
    const { getByTestId } = components;

    expect(getByTestId('outter-view')).toBeTruthy();
    expect(getByTestId('outter-view').children.length).toBe(1);
    expect(getByTestId('inner-view')).toBeTruthy();
    expect(getByTestId('inner-view').children.length).toBe(1);
  });
});
