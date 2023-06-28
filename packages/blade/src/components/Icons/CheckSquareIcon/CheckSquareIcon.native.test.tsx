import CheckSquareIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<CheckSquareIcon />', () => {
  it('should render CheckSquareIcon', () => {
    const renderTree = renderWithTheme(
      <CheckSquareIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
