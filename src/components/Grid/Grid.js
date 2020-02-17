import React from 'react';

import Square from './Square';

import './Grid.css';

const Grid = ({
                  size,
              }) => {
    const [height, width] = size.split('x').map(el => Number(el));

    if (!Number.isInteger(height) || !Number.isInteger(width)) {
        return (
            <span className="error">
                <span role="img" aria-label="warning">⚠</span>️
                Try again with positive integers.
            </span>
        );
    }

    if (height <= 0 || width <= 0) {
        return (
            <span className="error">
                <span role="img" aria-label="warning">⚠</span>️
                Elements have been painted in another dimension. Try again with positive integers.
            </span>
        );
    }

    if (height * width > 10_000) {
        return (
            <span className="error">
                ⚠️ Sorry, there are too many elements to paint. Try again with a smaller size.
            </span>
        );
    }

    const squareNodes =
        [...new Array(height * width)].map(
            (_, index) =>
                <Square
                    key={index}
                    rowIndex={~~(index / width)}
                    columnIndex={index % width}
                />
        );

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 50px)`,
        gridTemplateRows: `repeat(${height}, 50px)`,
        gridGap: '5px',
    };

    return (
        <div
            className="Grid"
            style={gridStyle}
        >
            {squareNodes}
        </div>
    );
};

export default Grid;