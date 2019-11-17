import React, { FC } from 'react'

interface InputProps {
    value?: string
    classname?: string
    action?: string,
    id?: string
}

const Input: FC<InputProps> = (props) => {
    const {classname, value, action, id} = props
    return (
          <input className={classname} value={value} type={action} id={id}  />
      );
}

export default Input