import React from "react"

export const Cell = ({ color, src, width }) => {
    const cellStyle = {
        backgroundColor : color,
        height: '100px',
        width
    };

    return (
        <div style={cellStyle}>
            <img height="90px" width="90px" src={src} />
        </div>
    )
}