import React, { memo } from 'react';

import type { Select as SelectType } from '../../types';
import Base from './base';

const Select = memo<SelectType.SelectProps>((props) => (
  <Base
    {...props}
    multiple={false}
    {...props?.onSelect && { onSelect: (data) => props.onSelect(data[0] || '') }}
  />
));

Select.displayName = 'Select';
export default Select;
