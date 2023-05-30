import React, { memo } from 'react';

import type { Select as SelectType } from '../../types';
import Base from '../Select/base';

const MultipleSelect = memo<SelectType.MultipleSelectProps>((props) => (
  <Base
    {...props}
    multiple
  />
));

MultipleSelect.displayName = 'MultipleSelect';
export default MultipleSelect;
