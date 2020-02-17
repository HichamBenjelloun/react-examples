import React from 'react';


const Square = ({
                    rowIndex,
                    columnIndex,
                }) => {
    const [backgroundColor, color] =
        (rowIndex + columnIndex) % 2 ?
            ['white', 'black'] :
            ['grey', 'white'];

    const divStyle = {
        backgroundColor: backgroundColor,
        color: color,
    };

    return (
        <div
            className="Square br2 grow-large hide-child"
            style={divStyle}
        >
            <span className="child">{rowIndex}, {columnIndex}</span>
        </div>
    );
};

export default Square;