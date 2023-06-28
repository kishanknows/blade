import TypeIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<TypeIcon />', () => {
  it('should render TypeIcon', () => {
    const renderTree = renderWithTheme(
      <TypeIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
