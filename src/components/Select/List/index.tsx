import React, { memo } from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import { Portal } from '@gorhom/portal';
import { useClickOutside } from 'react-native-click-outside';
import type { Select as SelectType } from '../../../types';
import ListItem from './item';

const DEFAULT_HEIGHT = 300;
const DEFAULT_BG_COLOR = '#fff';
const DEFAULT_EMPTY_SEARCH_TEXT = 'Not found';
const DEFAULT_NOT_FOUND_CONTAINER_HEIGHT = 80;

const List = memo<SelectType.ListProps>((props) => {
  const {
    data: mainData,
    locationConfig,
    boxHeight,
    boxWidth,
    onSelect,
    selectedItemValues = [],
    listBoxBackgroundColor = DEFAULT_BG_COLOR,
    maxListHeight = DEFAULT_HEIGHT,
    noDataText = DEFAULT_EMPTY_SEARCH_TEXT,
    notFoundTextStyle,
    listItemTextStyle,
    listItemSelectedTextStyle,
    listItemSelectedBackgroundColor,
    multiple,
    search,
    handleClose
  } = props;

  const portalKey = `${Math.random()}-select-portal`;
  // Search with case insensitive
  const data = search ? mainData.filter((item) => item.label.match(new RegExp(search, 'i'))) : mainData;
  const componentRef = useClickOutside<View>(handleClose);

  return (
    <Portal name={portalKey} key={portalKey}>
      <View
        ref={componentRef}
        style={[styles.container, {
          top: locationConfig.y + boxHeight,
          left: locationConfig.x,
          width: boxWidth,
          backgroundColor: listBoxBackgroundColor,
          maxHeight: maxListHeight,
          ...locationConfig.y === 0 && styles.hide // For eliminate initial load bug
        }]}
      >
        {
          data.length
            ? (
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <ListItem
                    item={item}
                    onSelect={onSelect}
                    isSelected={selectedItemValues.includes(item.value)}
                    listItemTextStyle={listItemTextStyle}
                    listItemSelectedTextStyle={listItemSelectedTextStyle}
                    listItemSelectedBackgroundColor={listItemSelectedBackgroundColor}
                    multiple={multiple}
                  />
                )}
                keyExtractor={(item) => item.value.toString()}
              />
            )
            : (
              <View style={styles.notFoundContainer}>
                <Text style={[styles.notFoundText, notFoundTextStyle]}>
                  {noDataText}
                </Text>
              </View>
            )
}

      </View>
    </Portal>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  hide: {
    opacity: 0
  },
  notFoundContainer: {
    height: DEFAULT_NOT_FOUND_CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFoundText: {
    textAlign: 'center',
    fontSize: 14
  }
});

List.displayName = 'List';
export default List;
