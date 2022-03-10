import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ListTitle } from './ListTitle';

describe('ListTitle ', () => {
  const props = {
    points: 'Pontos',
    position: 'Pos',
    name: 'Mateus',
  };

  it('should match snapshot', () => {
    const component = renderer.create(<ListTitle {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behavior', () => {
    const components = render(<ListTitle {...props} />);
    const { getByText } = components;
    expect(getByText(props.name)).toBeTruthy();
    expect(getByText(props.position)).toBeTruthy();
    expect(getByText(props.points)).toBeTruthy();
  });
});
