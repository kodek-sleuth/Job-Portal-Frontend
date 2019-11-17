import React, { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from './Input'

interface InputProps {
    divClassName?: string,
    formIcon: IconProp,
    inputType: string,
    inputValue: string,
    inputName?: string
    inputClassName?: string
    errorClassName?: string
    error?: string
    location?: boolean
}

const FormInput: FC<InputProps> = (props) => {
    const {divClassName, inputValue, inputName, inputType, formIcon, 
        inputClassName, error, errorClassName, location} = props
    if(location){
        return(
            <div className={divClassName}>
                <span><FontAwesomeIcon icon={formIcon} /></span>
                <Input value={inputValue} classname={inputClassName} action={inputType}/>
                <Input classname="dash_button_search" action="submit" value="Search" />
            </div>
        )
    }
    return (
        <div>
            <div className={divClassName}>
                <span><FontAwesomeIcon icon={formIcon} /></span>
                <Input value={inputValue} classname={inputClassName} action={inputType}/>
            </div>
            <div className={errorClassName}>
                <span>{error}</span>
            </div>
        </div>
      );
}


export default FormInput