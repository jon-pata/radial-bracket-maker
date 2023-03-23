import React, { useState } from "react"

export const Cell = ({ color, src, width , ourData, setOurData}) => {

    const [cellColor, setCellColor ] = useState(color);

    const cellStyle = {
        backgroundColor : cellColor,
        height: '100px',
        width: '100px'
    };
    const cellStyleBlank = {
        backgroundColor : 'grey',
        height: '100px',
        width: '100px'
    };

    const changeStyle = () => {
        setCellColor('grey')
    }
    
    return (
        <>
            {color && src ?
                <div style={cellStyle} onClick={changeStyle} >
                    <img height="90px" width="90px" src={src} />
                </div>
                :
                <div style={cellStyleBlank}/>
            }
        </>
    )
}