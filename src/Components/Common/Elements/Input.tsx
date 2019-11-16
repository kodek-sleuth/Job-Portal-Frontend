import React, { FC } from 'react'

interface InputProps {
    value?: string
    classname?: string
    action?: string
}

const Input: FC<InputProps> = (props) => {
    const {classname, value, action} = props
    return (
          <input className={classname} value={value} type={action}  />
      );
}

export default Input