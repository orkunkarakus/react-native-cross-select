import { TextStyle } from 'react-native';

export type DataValue = string|number;

export type Data = {
    label:string;
    value:DataValue;
}

type SharedProps = {
    listItemTextStyle?:TextStyle;
    listBoxBackgroundColor?:string;
    maxListHeight?:string;
    listItemSelectedTextStyle?:TextStyle;
    listItemSelectedBackgroundColor?:string;
    notFoundTextStyle?:TextStyle;
    /**
     * Multiple
     * - Default false
     */
    multiple?:boolean;
    noDataText?:string;
}

export type Props = {
    data:Data[];
    placeholder?:string;
    width?:number;
    height?:number;
    boxClosedBorderColor?:string;
    boxOpenedBorderColor?:string;
    /**
     * Close on select.
     * - Default true
     */
    closeOnSelect?:boolean;
    onSelect:OnSelectCallback<DataValue[]>;
    /**
     * Placeholder text style for box
     */
    placeHolderTextStyle?:TextStyle;
     /**
     * Text style for box
     */
    textStyle?:TextStyle;
    arrowColorOnSelected?:string;
    arrowColor?:string;
    backgroundColor?:string;
     /**
     * Searchable
     * - Default false
     */
    searchable?:boolean;
    defaultValues?:DataValue[]
} & SharedProps

export type ListProps = {
    data:Data[];
    locationConfig:{x:number, y:number};
    boxHeight:number;
    boxWidth:number;
    onSelect:OnSelectCallback;
    selectedItemValues:DataValue[];
    search:string;
    handleClose:()=>void;
} & SharedProps

export type ListItemProps = {
    item:Data;
    onSelect:OnSelectCallback;
    isSelected:boolean;
} & Omit<SharedProps, 'listBoxBackgroundColor'|'maxListHeight'>

type OnSelectCallback<T = DataValue> = (data:T)=>void;

export type SelectProps = Omit<Props, 'multiple'|'onSelect' | 'defaultValues'> & { onSelect:OnSelectCallback; defaultValue?:DataValue}
export type MultipleSelectProps = Omit<Props, 'multiple'>;

export type SelectOnSelectProp = OnSelectCallback;
export type MultipleSelectOnSelectProp = OnSelectCallback<DataValue[]>;

export type ClickableProps = Required<Pick<Props, 'data'|'placeholder'|'width'|'height'|
'boxClosedBorderColor'|'boxOpenedBorderColor'| 'placeHolderTextStyle'|'textStyle'|'arrowColorOnSelected'|'arrowColor'|'backgroundColor'> & {
    arrowSize:number; horizontalPadding:number; opened:boolean;
    selected:DataValue[]
}>

export type SearchableProps = ClickableProps & {
    search:string;
    handleChangeSearch:(str:string)=>void;
}
