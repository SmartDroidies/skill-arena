const CourseFrequency = ({ course }) => {
  console.log(course);
  let frequencyName = null;
  let priceName = null;
  switch (course.frequency) {
  case "single":
    frequencyName = "Single Session";
    priceName = "Rs 50 or Free";
    break;
  case "multi":
    frequencyName = "4 Sessions";
    priceName = "Rs 200 or Free";
    break;
  default:
    frequencyName = "recurring";
    priceName = "Rs 200 per Month";
    break;
  }
  return <frequency name={frequencyName} price={priceName} />;
};

export default CourseFrequency;
