import { Icon } from "@rneui/base";

// style={{ margin: 8 }}   //FIXME - Get this from styled component

const CourseMode = ({ course }) => {
  // FIXME - Determine the iconName & Family based on course mode using switch case
  const iconName = "headphones";
  const iconFamily = "font-awesome-5";
  switch (course.mode) {
  case "recorded":
    console.log("headphones");
    break;
  case "online":
    console.log("online");
    break;
  case "inperson":
    console.log("inperson");
    break;
    //   case "recorded":
    //     console.log("font-awesome-5");
    //     break;
    //   case "online":
    //     console.log(" google-classroom material-community");
    //     break;
    //   case "inperson":
    //     console.log("people material");
    //     break;
  }

  // headphones font-awesome-5 (recorded)
  // google-classroom material-community (online)
  // people material (inperson)
  //  console.log(" Course : ", course.mode);
  return <Icon name={iconName} type={iconFamily} />;
};

export default CourseMode;
