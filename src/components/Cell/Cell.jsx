import React, { useState } from "react"

export const Cell = ({ color, src, width , data, setData}) => {

    const [cellColor, setCellColor ] = useState(color);

    const cellStyle = {
        backgroundColor : cellColor,
        height: '100px',
        width: '100%'
    };
    const cellStyleBlank = {
        backgroundColor : color,
        height: '100px',
        width: '100%'
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