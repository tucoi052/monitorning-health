import React, { memo } from 'react';

import equals from 'react-fast-compare';

import { onCheckType } from '@common';

import { Text, View } from '@components/core';
import { styles } from './styles';
import { SelectItemProps } from './type';

import { Button } from '../button';

const SelectItemComponent = ({
  item,
  index,
  textItemStyle,
  onPress,
  customItem,
}: SelectItemProps) => {
  // function
  const _onPress = () => {
    if (onCheckType(onPress, 'function')) {
      onPress(item, index);
    }
  };

  // render
  return (
    <Button onPress={_onPress}>
      <View style={[[styles.container]]}>
        {customItem ? (
          customItem(item, index)
        ) : (
          <Text
            style={[styles.text, textItemStyle]}
            children={item.text ?? ''}
          />
        )}
      </View>
    </Button>
  );
};

export const SelectItem = memo(SelectItemComponent, equals);
