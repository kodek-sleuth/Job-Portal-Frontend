import React, { FC, MouseEventHandler } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSpanner from './IconSpanner';

interface ButtonProps {
    value: string,
    divClass?: string,
    btnClass?: string,
    handleClick?: MouseEventHandler<any>
}

interface SocialButton {
  divClass?: string,
  spanClass?: string,
  buttonValue: string,
  buttonIcon: IconProp, 
}

export const Button: FC<ButtonProps> = (props) => {
  const {btnClass, value, handleClick, divClass} = props
  return (
    <div className={divClass}>
      <button className={btnClass} onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}

export const SocialButton: FC<SocialButton> = (props) => {
  const {divClass, spanClass, buttonValue, buttonIcon} = props
  return (
    <div className={divClass}>
      <IconSpanner
        spanClass={spanClass}
        spanIcon={buttonIcon}
      />
      <Button value={buttonValue} />
    </div>
  );
}
