import React from 'react';

import SquareRow from './SquareRow';

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
        [...new Array(height)].map(
            (_, index) =>
                <SquareRow
                    key={index}
                    index={index}
                    width={width}
                />
        );

    return (
        <div className="Grid">
            {squareNodes}
        </div>
    );
};

export default Grid;