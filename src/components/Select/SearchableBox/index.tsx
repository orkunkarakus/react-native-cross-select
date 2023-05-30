import React, {
  memo, useMemo
} from 'react';
import {
  StyleSheet, Text, TextInput, View
} from 'react-native';
import type { Select as SelectType } from '../../../types';
import ArrowDownIcon from '../../Icons/arrowDown';

const SearchableBox = memo<SelectType.SearchableProps>((props) => {
  const {
    data,
    placeholder,
    width,
    height,
    boxClosedBorderColor,
    boxOpenedBorderColor,
    placeHolderTextStyle,
    textStyle,
    arrowColorOnSelected,
    arrowColor,
    backgroundColor,
    arrowSize,
    horizontalPadding,
    opened,
    selected,
    handleChangeSearch,
    search
  } = props;

  const foundLabel = useMemo(
    () => data.filter((item) => selected.includes(item.value)).map((item) => item.label).join(',') || '',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );

  return (
    <View style={[styles.container, {
      paddingHorizontal: horizontalPadding,
      backgroundColor,
      width,
      height,
      ...opened ? {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomWidth: 0,
        borderColor: boxOpenedBorderColor
      }
        : {
          borderColor: boxClosedBorderColor
        }
    }]}
    >
      {
            opened
              ? (
                <TextInput
                  value={search}
                  autoFocus
                  style={[
                    ...selected.length
                      ? [styles.text, textStyle]
                      : [styles.placeHolderText, placeHolderTextStyle],
                    { width: width - (horizontalPadding * 2) - arrowSize }
                  ]}
                  placeholder={placeholder}
                  onChangeText={(str) => handleChangeSearch(str)}
                />
              )
              : (
                <Text
                  style={[
                    ...selected.length
                      ? [styles.text, textStyle]
                      : [styles.placeHolderText, placeHolderTextStyle],
                    { width: width - (horizontalPadding * 2) - arrowSize }
                  ]}
                  numberOfLines={1}
                >
                  {selected.length ? foundLabel : placeholder}
                </Text>
              )
        }

      <ArrowDownIcon
        width={arrowSize}
        height={arrowSize}
        {...selected.length ? { stroke: arrowColorOnSelected } : { stroke: arrowColor }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeHolderText: {
    color: '#6c757d'
  },
  text: {
    color: 'black'
  }
});

SearchableBox.displayName = 'SearchableBox';
export default SearchableBox;
