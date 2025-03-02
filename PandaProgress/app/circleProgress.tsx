// components/CircularProgress.tsx

import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type CircularProgressProps = {
  percentage: number;
  radius: number;
  strokeWidth: number;
  color: string;
};

const CircleProgress: React.FC<CircularProgressProps> = ({ percentage, radius, strokeWidth, color }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        transform="rotate(-90)" // Rotate the SVG by -90 degrees to start from the top
      >
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default CircleProgress;
