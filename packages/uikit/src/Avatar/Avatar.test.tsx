import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Avatar } from './Avatar';

describe('Avatar ', () => {
  const props = {
    image: 'image',
    size: '24px',
  };

  const props2 = {
    size: '24px',
  };
  it('should match snapshot', () => {
    const component = renderer.create(<Avatar {...props}></Avatar>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has image', () => {
    const { getByTestId } = render(<Avatar {...props} />);
    expect(getByTestId('avatar')).toBeTruthy();
    expect(() => getByTestId('empty-avatar')).toThrow(
      'Unable to find an element'
    );
  });

  it('has no image', () => {
    const { getByTestId } = render(<Avatar {...props2} />);
    expect(getByTestId('empty-avatar')).toBeTruthy();
    expect(() => getByTestId('avatar')).toThrow('Unable to find an element');
  });
});
