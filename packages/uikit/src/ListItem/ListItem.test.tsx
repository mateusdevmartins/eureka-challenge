import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ListItem } from './ListItem';

describe('ListItem ', () => {
  const props = {
    points: 100,
    position: 20,
    name: 'Mateus',
    onClick: jest.fn(),
  };

  it('should match snapshot', () => {
    const component = renderer.create(<ListItem {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behavior', () => {
    const components = render(<ListItem {...props} />);
    const { getByText, getByTestId } = components;

    expect(getByText(props.name)).toBeTruthy();
    expect(getByText(props.position)).toBeTruthy();
    expect(getByText(props.points)).toBeTruthy();

    fireEvent.click(getByTestId('pressable'));

    expect(props.onClick).toBeCalled();
  });
});
