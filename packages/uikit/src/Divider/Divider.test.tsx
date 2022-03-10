import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Divider } from './Divider';

describe('Divider ', () => {
  const props = {
    margin: '24px',
    width: '100%',
  };

  it('should match snapshot', () => {
    const component = renderer.create(<Divider {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('behavior', () => {
    const components = render(<Divider {...props} />);
    const { getByTestId } = components;

    expect(getByTestId('divider').style.marginTop).toBe(props.margin);
    expect(getByTestId('divider').style.marginBottom).toBe(props.margin);
    expect(getByTestId('divider').style.width).toBe(props.width);
  });
});
