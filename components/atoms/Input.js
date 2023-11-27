import classNames from 'classnames';
import React from 'react';

const Input = ({ placeholder, className, ...other }) => {
  return <input placeholder={placeholder} className={classNames('p-2 border rounded-md focus:outline-none text-sage border-sage bg-transparent', className)} {...other} />;
};

export default Input;
