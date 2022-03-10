import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { RadioButton } from './RadioButton';

describe('RadioButton should match snapshot', () => {
  const props1 = {
    isSelected: false,
  };
  const props2 = {
    isSelected: true,
  };
  describe('behavior', () => {
    const component = renderer.create(<RadioButton {...props1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('behavior', () => {
    it('isSelected false', () => {
      const { getByTestId } = render(<RadioButton {...props1} />);

      expect(getByTestId('outter-radio').style.borderColor).toBe('#b5bac8');
      expect(getByTestId('inner-radio').style.backgroundColor).toBe(
        'transparent'
      );
    });

    it('isSelected true', () => {
      const { getByTestId } = render(<RadioButton {...props2} />);
      expect(getByTestId('outter-radio').style.borderColor).toBe('#1c8eff');
    });
  });
});
