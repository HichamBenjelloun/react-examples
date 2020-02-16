import React from 'react';


const Square = ({
                    parentIndex,
                    index,
                }) => {
    const [backgroundColor, color] =
        (parentIndex + index) % 2 ?
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
            <span className="child">{parentIndex}, {index}</span>
        </div>
    );
};

export default Square;