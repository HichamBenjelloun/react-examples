import React from 'react';
import Square from './Square';

const SquareRow = ({
                       index,
                       width,
                   }) => {
    const squareNodes =
        [...Array(width).keys()].map(
            cur =>
                <Square
                    key={cur}
                    index={cur}
                    parentIndex={index}
                />
        );

    return (
        <div className="SquareRow">
            {squareNodes}
        </div>
    );
};

export default SquareRow;