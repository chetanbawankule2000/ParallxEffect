import { useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedSensor,
  useAnimatedStyle,
  SensorType,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const IMAGE_OFFSET = 150;
const PI = Math.PI;
const HALF_PI = PI / 2;

const SensorAimatedImage = ({ image, order }) => {
  const { width, height } = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION);

  const imageStyles = useAnimatedStyle(() => {
    const { yaw, roll, pitch } = sensor.sensor.value;
    return {
      top: withTiming(
        interpolate(
          pitch,
          [-HALF_PI, HALF_PI],
          [(-IMAGE_OFFSET * 2) / order, 0]
        ),
        { duration: 100 }
      ),
      left: withTiming(
        interpolate(roll, [-PI, PI], [(-IMAGE_OFFSET * 2) / order, 0]),
        {
          duration: 100,
        }
      ),
    };
  });
  return (
    <Animated.Image
      source={image}
      style={[
        {
          width: width + (2 * IMAGE_OFFSET) / order,
          height: height + (2 * IMAGE_OFFSET) / order,
          position: "absolute",
        },
        imageStyles,
      ]}
    />
  );
};

export default SensorAimatedImage;
