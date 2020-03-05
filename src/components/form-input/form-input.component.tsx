import React from 'react';

import './form-input.styles.scss';

interface Props {
  name: string;
  type: string;
  value: string;
  handleChange: () => any;
  handleShrinkEffect: () => any;
}

const FormInput: React.FC<Props> = ({ name, type, value, handleChange, handleShrinkEffect }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange()}
        required={true}
      />
    {handleShrinkEffect()}
    </div>
  )
}

export default FormInput;