import React from 'react'

function Bullet(props){
    return(
        <div
            style = {{
                position: 'absolute',
                backgroundPosition: '0 0',
                backgroundColor: 'black',
                width: '10px',
                height: '10px',
                borderRadius: 44/2
            }}            
        />
    )

}

export default Bullet