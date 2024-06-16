import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import isEqual from 'react-fast-compare';

import { CheckIcon } from '@assets/icons-svg';

import { View } from '@components/core';
import { useThemeStyles } from '@theme';
import { styleSheet } from './styles';

import { ItemProps } from './type';

const DropDownItemComponent = ({
  item,
  labelStyle,
  activeItemStyle,
  activeLabelStyle,
  containerStyleItem,
  onPressItem,
  customTickIcon,
  selected = false,
}: ItemProps) => {
  const { styles } = useThemeStyles(styleSheet)

  // function
  const _onItemPress = () => {
    onPressItem && item && onPressItem(item.value ?? '');
  };

  // render
  return (
    <TouchableOpacity onPress={_onItemPress}>
      <View
        style={[
          styles.container,
          containerStyleItem,
          selected && activeItemStyle,
        ]}>
        <Text
          style={[styles.labelStyle, labelStyle, selected && activeLabelStyle]}>
          {item.label}
        </Text>
        <View style={[styles.wrapIcon]}>
          {selected && (customTickIcon ? customTickIcon() : <CheckIcon />)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const DropDownItem = memo(DropDownItemComponent, isEqual);
