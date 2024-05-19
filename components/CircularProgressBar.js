import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';
import { Images, Colors } from "../config";


const CircularChart = ({ percent }) => {
  return (
    <Svg width="60" height="60" viewBox="0 0 36 36">
      {/* Background Circle */}
      <Path
        className="circle-bg"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="transparent"
        stroke="#495950" // Assuming a light grey color for the background circle
        strokeWidth="3"
      />

      {/* Foreground Circle */}
      <Path
        className="circle"
        stroke="#bef957" // Green color for the foreground circle
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={`${percent} 100`}
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />

      {/* Percentage Text */}
      <Text
        x="8"
        y="21"
        fontSize={9}
        fontWeight="800"
        fill={Colors.white}
        textAlign="center"
      >
        {percent}%
      </Text>
    </Svg>
  );
};

export default CircularChart;
