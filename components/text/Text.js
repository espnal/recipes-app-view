import React from 'react';
import clsx from 'clsx';
import classes from './Text.module.scss';

function Text({ children, className, extraStyles }) {
  const combinedClassName = clsx(classes.text, className, extraStyles);

  return <p className={combinedClassName}>{children}</p>;
}

export default Text;

