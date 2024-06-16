import React from 'react';
import {
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { EyeIcon, EyeOffIcon } from '@assets/icons-svg';
import { Box, Button, Text } from '@components';
import { useThemeStyles } from '@theme';

import { useStyle } from './styles';
import { ETypeField } from './types';

interface ITextInputComponentProps extends TextInputProps {
  leftLabel?: string;
  rightLabel?: string;
  placeHolder?: string;
  textValue?: string;
  onChangeValue?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  customTextInputStyle?: Pick<TextInputProps, 'style'>;
  multiline?: boolean;
  errorMessage?: string | boolean;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  type?: ETypeField;
  editable?: boolean;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  wrapperStyle?: ViewStyle;
}

export const TextInputComponent: React.FC<ITextInputComponentProps> =
  React.memo(
    ({
      leftLabel,
      rightLabel,
      placeHolder,
      onChangeValue,
      keyboardType = 'default',
      customTextInputStyle,
      multiline = false,
      errorMessage,
      onSubmitEditing,
      type = ETypeField.TEXT,
      editable = true,
      textValue,
      onPressIn,
      iconRight,
      iconLeft,
      wrapperStyle,
      onFocus,
      onBlur,
      ...rest
    }) => {
      const { theme } = useThemeStyles();
      const styles = useStyle();
      const [hidden, setHidden] = React.useState(false);
      const [value, setValueChange] = React.useState('');
      const [borderColorFocused, setBorderColorFocused] = React.useState<string>(
        theme.color.secondary,
      );

      const customFocus = () => {
        onFocus;

        setBorderColorFocused(theme.color.primary);
      };

      const customBlur = () => {
        onBlur;

        setBorderColorFocused(theme.color.secondary);
      };

      const _handleOnchangeText = (string: string) => {
        setValueChange(string);

        if (onChangeValue) {
          onChangeValue(string);
        }
      };

      const _handleShowPassword = () => {
        setHidden(!hidden);
      };

      let textInputStyle: TextStyle = { ...styles.textInput };
      if (customTextInputStyle) {
        textInputStyle = { ...textInputStyle, ...customTextInputStyle };
      }

      const containerStyle = { ...styles.container };

      if (!iconLeft) {
        textInputStyle = {
          ...textInputStyle,
          paddingLeft: 16,
        };
      }

      return (
        <Box style={wrapperStyle}>
          <Box direction="row">
            {leftLabel && (
              <Text
                style={{ paddingBottom: 10 }}
                flex
                fontSize={12}
                fontWeight="600"
                color={theme.color.secondary}>
                {leftLabel}
              </Text>
            )}
            {rightLabel && (
              <Text
                fontSize={12}
                fontWeight="600"
                style={{ paddingBottom: 10 }}
                color={theme.color.secondary}>
                {rightLabel}
              </Text>
            )}
          </Box>
          <Box style={[containerStyle, { borderColor: borderColorFocused }]}>
            {iconLeft && <Box style={styles.iconRight}>{iconLeft}</Box>}
            <TextInput
              value={textValue && textValue != '' ? textValue : value}
              keyboardType={keyboardType as any}
              placeholderTextColor={theme.color.secondary}
              style={textInputStyle}
              onChangeText={_handleOnchangeText}
              placeholder={placeHolder}
              multiline={multiline}
              secureTextEntry={type === ETypeField.PASSWORD && !hidden && true}
              editable={editable ?? true}
              selectionColor={theme.color.primary}
              onSubmitEditing={onSubmitEditing}
              onPressIn={onPressIn}
              onFocus={customFocus}
              onBlur={customBlur}
              {...rest}
            />
            {type === ETypeField.PASSWORD && (
              <Button activeOpacity={0.8} ph={12} onPress={_handleShowPassword}>
                {hidden ? <EyeIcon /> : <EyeOffIcon />}
              </Button>
            )}
            {iconRight && <Box ph={12}>{iconRight}</Box>}
          </Box>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </Box>
      );
    },
  );
