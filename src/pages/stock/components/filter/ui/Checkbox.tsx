import React, { FC, useState } from 'react';
import { IFilterProps } from '../interfaces';

interface ICheckbox extends IFilterProps {
  setFilters: Function;
}

const Checkbox: FC<ICheckbox> = ({ 
  label,
  value,
  setFilters,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  
  const handleChange = () => {
    if (!checked) {
      setFilters((filters: Array<string>) => [...filters, value]);
    } else {
      setFilters((filters: Array<string>) => filters.filter((filter) => filter !== value));
    }
    setChecked((isChecked) => !isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
