import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon, Text as SvgText } from 'react-native-svg';
import colors from '../theme/color';

export default function TimerBox({ text }: { text: string }) {
  const topWidth = 24;
  const bottomWidth = 26;
  const height = 26;

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={bottomWidth} height={height}>
        <Polygon
          points={`
            ${(bottomWidth - topWidth) / 2},0
            ${(bottomWidth + topWidth) / 2},0
            ${bottomWidth},${height}
            0,${height}
          `}
          fill={colors.red700}
        />
        <SvgText
          x={bottomWidth / 2}
          y={height / 2 + 5}
          fontSize="14"
          fill="white"
          textAnchor="middle"
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
}
