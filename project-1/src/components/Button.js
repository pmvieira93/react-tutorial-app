import React from 'react';

function Button(self){
    return <button type={self.type} disabled={self.disabled} className="ui-button">{self.children}</button>
}

export default Button;