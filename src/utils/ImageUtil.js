import { IMAGE_URL } from "@env";
import Global from "./Global";

export function courseImage(image) {
  // FIXME - If the image is empty or null display a default image
  const imageUrl = image
    ? IMAGE_URL + "/" + image
    : IMAGE_URL + "/" + Global.Default.courseImage;
  console.log("Course Image URL", imageUrl);
  return imageUrl;
}
