import React, { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
    value: string,
    classname?: string
}

interface SocialButton {
  divClassName?: string,
  spanClassName?: string,
  buttonValue: string,
  buttonIcon: IconProp
}

export const Button: FC<ButtonProps> = (props) => {
  const {classname, value} = props
  return (
    <button className={classname}>
      {value}
    </button>
  );
}

export const SocialButton: FC<SocialButton> = (props) => {
  const {divClassName, spanClassName, buttonValue, buttonIcon} = props
  return (
    <div className={divClassName}>
      <span className={spanClassName}><FontAwesomeIcon icon={buttonIcon} /></span>
      <Button value={buttonValue} />
    </div>
  );
}
