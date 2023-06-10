import React, {
  memo, useEffect, useRef, useState
} from 'react';
import { TouchableOpacity } from 'react-native';
import type { Select as SelectType } from '../../types';
import List from './List';
import ClickableBox from './Box';
import SearchableBox from './SearchableBox';

const DEFAULT_HORIZONTAL_PADDING = 10;
const DEFAULT_ARROW_SIZE = 8;
const DEFAULT_PLACEHOLDER = 'Please select...';
const DEFAULT_SEARCH_PLACEHOLDER = 'Search here...';
const DEFAULT_HEIGHT = 40;
const DEFAULT_WIDTH = 250;
const DEFAULT_CLOSED_COLOR = '#6c757d';
const DEFAULT_OPENED_COLOR = '#000';
const DEFAULT_ARROW_COLOR_SELECTED = '#000';
const DEFAULT_ARROW_COLOR_UNSELECTED = '#6c757d';
const DEFAULT_BG_COLOR = '#fff';

const Base = memo<SelectType.Props>((props) => {
  const {
    data,
    placeholder: mainPlaceHolder,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    boxClosedBorderColor = DEFAULT_CLOSED_COLOR,
    boxOpenedBorderColor = DEFAULT_OPENED_COLOR,
    closeOnSelect = true,
    onSelect,
    placeHolderTextStyle = {},
    textStyle = {},
    arrowColorOnSelected = DEFAULT_ARROW_COLOR_SELECTED,
    arrowColor = DEFAULT_ARROW_COLOR_UNSELECTED,
    backgroundColor = DEFAULT_BG_COLOR,
    listBoxBackgroundColor,
    maxListHeight,
    listItemTextStyle,
    listItemSelectedTextStyle,
    listItemSelectedBackgroundColor,
    multiple = false,
    searchable = false,
    notFoundTextStyle = {},
    noDataText,
    defaultValues = [],
    withPortal = true
  } = props;

  const placeholder = mainPlaceHolder || (searchable ? DEFAULT_SEARCH_PLACEHOLDER : DEFAULT_PLACEHOLDER);

  const [selected, setSelected] = useState<SelectType.DataValue[]>(defaultValues);
  const [opened, setOpened] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [locationConfig, setLocationConfig] = useState<{x:number, y:number}>({ x: 0, y: 0 });
  const ref = useRef<TouchableOpacity>(null);

  const handleClick = () => {
    ref?.current?.measureInWindow((x, y) => {
      setLocationConfig({ x, y });
    });
    setOpened((prev) => !prev);
  };

  const handleSelect = (value:SelectType.DataValue) => {
    if (multiple) {
      setSelected((prev) => {
        let temp = prev;
        const found = temp.findIndex((item) => item === value);
        if (found !== -1) {
          temp = temp.filter((item) => item !== value);
        } else {
          temp.push(value);
        }

        return [...temp];
      });
    } else {
      setSelected([value]);
      if (closeOnSelect) {
        setOpened(false);
      }
    }
    setSearch('');
  };

  useEffect(() => {
    if (typeof onSelect === 'function') {
      onSelect(selected);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <TouchableOpacity onPress={handleClick} ref={ref}>
        {
          searchable
            ? (
              <SearchableBox
                data={data}
                placeholder={placeholder}
                width={width}
                height={height}
                boxClosedBorderColor={boxClosedBorderColor}
                boxOpenedBorderColor={boxOpenedBorderColor}
                placeHolderTextStyle={placeHolderTextStyle}
                textStyle={textStyle}
                arrowColorOnSelected={arrowColorOnSelected}
                arrowColor={arrowColor}
                backgroundColor={backgroundColor}
                arrowSize={DEFAULT_ARROW_SIZE}
                horizontalPadding={DEFAULT_HORIZONTAL_PADDING}
                opened={opened}
                selected={selected}
                handleChangeSearch={(str) => setSearch(str)}
                search={search}
              />
            )
            : (
              <ClickableBox
                data={data}
                placeholder={placeholder}
                width={width}
                height={height}
                boxClosedBorderColor={boxClosedBorderColor}
                boxOpenedBorderColor={boxOpenedBorderColor}
                placeHolderTextStyle={placeHolderTextStyle}
                textStyle={textStyle}
                arrowColorOnSelected={arrowColorOnSelected}
                arrowColor={arrowColor}
                backgroundColor={backgroundColor}
                arrowSize={DEFAULT_ARROW_SIZE}
                horizontalPadding={DEFAULT_HORIZONTAL_PADDING}
                opened={opened}
                selected={selected}
              />
            )
}
      </TouchableOpacity>
      {opened && (
      <List
        data={data}
        locationConfig={locationConfig}
        boxHeight={height}
        boxWidth={width}
        onSelect={handleSelect}
        selectedItemValues={selected}
        listBoxBackgroundColor={listBoxBackgroundColor}
        maxListHeight={maxListHeight}
        listItemTextStyle={listItemTextStyle}
        listItemSelectedTextStyle={listItemSelectedTextStyle}
        listItemSelectedBackgroundColor={listItemSelectedBackgroundColor}
        multiple={multiple}
        search={search}
        handleClose={() => setOpened(false)}
        notFoundTextStyle={notFoundTextStyle}
        noDataText={noDataText}
        withPortal={withPortal}
      />
      )}
    </>
  );
});

Base.displayName = 'Base';
export default Base;
