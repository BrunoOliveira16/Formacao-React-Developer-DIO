import React from 'react';
import { InputContainer, IconContainer, InputText } from './styles';

const Input = ({ leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        { leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null }
        <InputText {...rest}/>
    </InputContainer>
  )
}

export { Input };