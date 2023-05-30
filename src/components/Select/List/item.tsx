import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import type { Select as SelectType } from '../../../types';

const DEFAULT_SELECTED_BG = 'dodgerblue';
const DEFAULT_SELECTED_TEXT_COLOR = 'white';

const ListItem = memo<SelectType.ListItemProps>((props) => {
  const {
    item, onSelect, isSelected, listItemTextStyle = {},
    listItemSelectedTextStyle = {}, listItemSelectedBackgroundColor = DEFAULT_SELECTED_BG
    // TODO multiple for tick icon
    /* multiple */
  } = props;

  const handleClick = () => {
    onSelect(item.value);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.container, isSelected ? [{ backgroundColor: listItemSelectedBackgroundColor }] : []]}>
        <Text style={[styles.text, isSelected ? [styles.selectedText, listItemSelectedTextStyle] : [listItemTextStyle]]}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'black'
  },
  selectedText: {
    color: DEFAULT_SELECTED_TEXT_COLOR
  }
});

ListItem.displayName = 'ListItem';
export default ListItem;
