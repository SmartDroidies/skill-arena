import renderer from "react-test-renderer";
import Course from "../../components/Course";
describe("Course component is rendered correctly", () => {
  const tree = renderer.create(<Course />).toJSON();
  expect(tree).toMatchSnapshot();
});
