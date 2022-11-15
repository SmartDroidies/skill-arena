import { Icon } from "@rneui/base";

// style={{ margin: 8 }}   //FIXME - Get this from styled component

const CourseMode = ({ course }) => {
  // FIXME - Determine the iconName & Family based on course mode using switch case
  const iconName = "headphones";
  const iconFamily = "font-awesome-5";

  // headphones font-awesome-5 (recorded)
  // google-classroom material-community (online)
  // people material (inperson)
  // console.log(" Course : ", course.mode);
  return <Icon name={iconName} type={iconFamily} />;
};

export default CourseMode;
