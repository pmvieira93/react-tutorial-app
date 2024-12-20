import React from 'react';

function Input(self){
    let {type="text", name, placeholder} = self;
    return <input type={type} name={name} placeholder={placeholder} className="ui-textfield"/>
}

export default Input;