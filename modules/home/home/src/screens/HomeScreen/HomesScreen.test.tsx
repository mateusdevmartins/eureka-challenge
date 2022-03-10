import renderer from 'react-test-renderer';
import { HomeScreen } from './HomeScreen';

test('Avatar should match snapshot', () => {
  const component = renderer.create(<HomeScreen />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
