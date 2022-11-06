import { View, Text } from "react-native";
import React from "react";
import SensorAimatedImage from "./SensorAnimatedImage";

const Parallx = ({ layers }) => {
  return (
    <>
      {layers.reverse().map((image, index) => (
        <SensorAimatedImage
          key={`layer_${index}`}
          image={image}
          order={index + 1}
        />
      ))}
    </>
  );
};

export default Parallx;
