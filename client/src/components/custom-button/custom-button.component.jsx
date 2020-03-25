import React from 'react';

import './custom-button.styles.scss';

import { CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({ children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

export default CustomButton;