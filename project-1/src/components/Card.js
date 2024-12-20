import React from 'react';

function Card(self){
    return (
        <>
            <div className='ui-card'>
                {self.children}
            </div>
        </>
    )
}

export default Card;