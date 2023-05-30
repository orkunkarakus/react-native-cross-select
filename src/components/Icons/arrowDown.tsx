import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowDownIcon = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6c757d"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M6 9L12 15 18 9" />
  </Svg>
);

ArrowDownIcon.displayName = 'ArrowDownIcon';
export default ArrowDownIcon;
