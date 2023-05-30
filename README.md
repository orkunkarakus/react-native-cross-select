# react-native-cross-select

Select component for react native

## Features

- Using Portal
- Multiple and Single Select
- Searchable Select
- Fully Modifiable

----------

## Installation

With NPM
```sh
npm install react-native-cross-select
```
With YARN

```sh
yarn add react-native-cross-select
```
-------
## Usage

- Add provider to main app file

```ts
import { SelectProvider } from 'react-native-cross-select';

const Index = () => (
  <SelectProvider>
    <App />
  </SelectProvider>
);
```

--------

## Components

- Single Select

```ts
import Select, { ISelect } from 'react-native-cross-select';

const DATA = [
    {
        label:"Input 1",
        value:1
    },
    {
        label:"Input 2",
        value:2
    }
]

const App = () => {
    const handleChange:ISelect.Select.SelectOnSelectProp = (data) => {
        console.log('Data: ', data);
    };
    
    return(
        <Select data={DATA} onSelect={handleChange} />
    )
};
```

-------

- Multiple Select

```ts
import { ISelect, MultipleSelect } from 'react-native-cross-select';

const DATA = [
    {
        label:"Input 1",
        value:1
    },
    {
        label:"Input 2",
        value:2
    }
]

const App = () => {
    const handleMultipleChange:ISelect.Select.MultipleSelectOnSelectProp = (data) => {
        console.log('Datas: ', data);
    };
    
    return(
        <MultipleSelect data={DATA} onSelect={handleMultipleChange} />
    )
};
```

-------

- Single Select With Search

```ts
import Select, { ISelect } from 'react-native-cross-select';

const DATA = [
    {
        label:"Input 1",
        value:1
    },
    {
        label:"Input 2",
        value:2
    }
]

const App = () => {
    const handleChange:ISelect.Select.SelectOnSelectProp = (data) => {
        console.log('Data: ', data);
    };
    
    return(
        <Select data={DATA} onSelect={handleChange} searchable />
    )
};
```

-------

- Multiple Select With Search

```ts
import { ISelect, MultipleSelect } from 'react-native-cross-select';

const DATA = [
    {
        label:"Input 1",
        value:1
    },
    {
        label:"Input 2",
        value:2
    }
]

const App = () => {
    const handleMultipleChange:ISelect.Select.MultipleSelectOnSelectProp = (data) => {
        console.log('Datas: ', data);
    };
    
    return(
        <MultipleSelect data={DATA} onSelect={handleMultipleChange} searchable />
    )
};
```


## Props

| Name | Description | Type | Default | Required
|---|---|---|---|---|
| data |  Data array | {label:string; value:string|number}[] (Array of data object) |  [] | true |
|  placeholder |  Placeholder for select box | string | Please select... (if searchable true then it's "Search here...") | false |
|  width |  width of select box | number  |  250 | false |
|  height |  height of select box | number  |  40 | false |
|  boxClosedBorderColor |  Box border color while it's close state | string  |  - | false |
|  boxOpenedBorderColor |  Box border color while it's open state | string  |  - | false |
|  closeOnSelect |  Close on select (it's only for single select) | boolean  |  true | false |
|  onSelect |  Callback function to handle change | function  |  - | true |
|  placeHolderTextStyle | Custom text style for placeholder | RN style object  |  {} | false |
|  textStyle | Custom text style | RN style object  |  {} | false |
|  arrowColorOnSelected | Arrow color while select box open state | string  |  - | false |
|  arrowColor | Arrow color while select box close state | string  |  - | false |
|  backgroundColor | Background color of box | string  |  - | false |
|  searchable | Searchable support | boolean  |  - | false |
|  listItemTextStyle | Custom text style for list item | RN style object  |  {} | false |
|  listBoxBackgroundColor | List box background color | string  |  - | false |
|  maxListHeight | Max list height | number  |  - | false |
|  listItemSelectedTextStyle | Custom text style for list item while selected state | RN style object  |  {} | false |
|  listItemSelectedBackgroundColor | Custom style for list item while selected state | RN style object  |  {} | false |
|  notFoundTextStyle | Not found text style | RN style object  |  {} | false |
|  noDataText |  No data text | string  |  No data found | false |

--------

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

-------

## Thanks for

- [@gorhom/portal](https://github.com/gorhom/react-native-portal)
- [react-native-click-outside](https://github.com/jakex7/react-native-click-outside)
- [react-native-svg](https://github.com/software-mansion/react-native-svg)

-------

## License

MIT
