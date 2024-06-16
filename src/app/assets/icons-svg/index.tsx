import React from 'react';

import { SvgProps } from 'react-native-svg';

//icon SVG
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRightWhite from './arrow-right-white.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import BackWhite from './back-white.svg';
import Back from './back.svg';
import Check from './check.svg';
import EyeOff from './eye-off.svg';
import Eye from './eye.svg';
import CrossHair from './crosshair.svg';
import Geo from './geo.svg';

export const BackIcon = (props: SvgProps) => <Back {...props} />;

export const ArrowRightIcon = (props: SvgProps) => <ArrowRight {...props} />;

export const ArrowLeftIcon = (props: SvgProps) => <ArrowLeft {...props} />;

export const ArrowUpIcon = (props: SvgProps) => <ArrowUp {...props} />;

export const ArrowDownIcon = (props: SvgProps) => <ArrowDown {...props} />;

export const ArrowRightWhiteIcon = (props: SvgProps) => (
  <ArrowRightWhite {...props} />
);

export const BackWhiteIcon = (props: SvgProps) => <BackWhite {...props} />;

export const CheckIcon = (props: SvgProps) => <Check {...props} />;

export const EyeIcon = (props: SvgProps) => <Eye color="white" {...props} />;

export const EyeOffIcon = (props: SvgProps) => (
  <EyeOff color="white" {...props} />
);

export const CrosHairIcon = (props: SvgProps) => <CrossHair color="white" {...props} />;

export const GeoIcon = (props: SvgProps) => <Geo color="white" {...props} />;
