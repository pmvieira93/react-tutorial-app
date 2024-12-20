import React from 'react';

function Link(self){
    let {href, children} = self;
    return <a href={href} className="ui-link">{children}</a>;
}

export default Link;