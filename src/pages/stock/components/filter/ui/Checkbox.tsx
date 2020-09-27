import React, { FC } from 'react';
import { IFilterProps } from '../interfaces';

const Checkbox: FC<IFilterProps> = ({ label, value }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" name={value} value={value}/>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
