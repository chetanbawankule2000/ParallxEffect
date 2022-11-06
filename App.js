import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import bg from "./assets/images/bg.jpeg";

import SensorAimatedImage from "./src/component/SensorAnimatedImage";
import Parallx from "./src/component/Parallx";
import layer1 from "./assets/images/Parallax/2.png";
import layer2 from "./assets/images/Parallax/3.png";
import layer3 from "./assets/images/Parallax/4.png";
import layer4 from "./assets/images/Parallax/5.png";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SensorAimatedImage image={bg} /> */}
      <Parallx layers={[layer1, layer2, layer3, layer4]} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default App;
