import React, { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from './Input'

interface InputProps {
    divClass?: string,
    formIcon: IconProp,
    inputType: string,
    inputValue: string,
    inputName?: string
    inputClass?: string
    errorClass?: string
    error?: string
    location?: boolean
}

const FormInput: FC<InputProps> = (props) => {
    const {divClass, inputValue, inputName, inputType, formIcon, 
        inputClass, error, errorClass, location} = props
    if(location){
        return(
            <div className={divClass}>
                <span><FontAwesomeIcon icon={formIcon} /></span>
                <Input value={inputValue} classname={inputClass} action={inputType}/>
                <Input classname="dash_button_search" action="submit" value="Search" />
            </div>
        )
    }
    return (
        <div>
            <div className={divClass}>
                <span><FontAwesomeIcon icon={formIcon} /></span>
                <Input value={inputValue} classname={inputClass} action={inputType}/>
            </div>
            <div className={errorClass}>
                <span>{error}</span>
            </div>
        </div>
      );
}


export default FormInput