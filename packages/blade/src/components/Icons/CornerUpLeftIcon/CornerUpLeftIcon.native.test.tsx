import CornerUpLeftIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<CornerUpLeftIcon />', () => {
  it('should render CornerUpLeftIcon', () => {
    const renderTree = renderWithTheme(
      <CornerUpLeftIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
