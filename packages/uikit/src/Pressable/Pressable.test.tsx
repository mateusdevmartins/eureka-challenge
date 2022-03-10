import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Pressable } from './Pressable';

describe('Pressable', () => {
  const props = {
    onPress: jest.fn(),
  };
  it('should match snapshot', () => {
    const component = renderer.create(
      <Pressable {...props}>
        <></>
      </Pressable>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behavior', () => {
    const components = render(
      <Pressable {...props}>
        <></>
      </Pressable>
    );
    const { getByTestId } = components;
    expect(getByTestId('pressable')).toBeTruthy();
    fireEvent.click(getByTestId('pressable'));
    expect(props.onPress).toBeCalled();
  });
});
