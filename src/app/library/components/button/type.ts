import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { RequireAtLeastOne } from '@common';
import { I18nKeys } from '@utils/i18n/locales';

export type ButtonProps = RequireAtLeastOne<
  {
    /**
     * Button size
     * @default normal
     */
    size?: 'normal' | 'small' | 'extraSmall';

    /**
     * Children for button
     * @default undefined
     */
    children?: React.ReactNode;

    /**
     * Left Icon
     */
    leftIcon?: React.ReactNode;

    /**
     * Right Icon
     */
    rightIcon?: React.ReactNode;

    /**
     * Disable button when press
     */
    throttleMs?: number;

    text: string;

    t18n: I18nKeys;
  },
  't18n' | 'text'
> &
  TouchableWithoutFeedbackProps;
