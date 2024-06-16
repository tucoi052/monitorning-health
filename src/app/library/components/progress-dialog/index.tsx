import React, {
  createRef,
  forwardRef,
  memo,
  useImperativeHandle,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';

import isEqual from 'react-fast-compare';

import { View } from '@components/core';
import { useDisableBackHandler, useDismissKeyboard } from '@hooks';
import { useThemeStyles } from '@theme';

import { styles } from './styles';

const Spinner = memo(() => {
  // state
  const { theme } = useThemeStyles();

  // render
  return <ActivityIndicator color={theme.color.primary} size={'large'} />;
}, isEqual);

const ProgressDialogComponent = forwardRef((_, ref) => {
  // state
  const [visible, setVisible] = useState(false);

  // effect
  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );

  useDisableBackHandler(visible);

  useDismissKeyboard(visible);

  // render
  return visible ? (
    <>
      <View style={[styles.container]}>
        <Spinner />
      </View>
    </>
  ) : null;
});

export const progressDialogRef = createRef<ProgressDialogRef>();

export const ProgressDialog = () => (
  <ProgressDialogComponent ref={progressDialogRef} />
);

export const showLoading = () => {
  progressDialogRef.current?.show();
};

export const hideLoading = () => {
  progressDialogRef.current?.hide();
};

export interface ProgressDialogRef {
  show(): void;
  hide(): void;
}
