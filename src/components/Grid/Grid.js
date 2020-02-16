import React from 'react';

import SquareRow from './SquareRow';

import './Grid.css';

const Grid = ({
                  size,
              }) => {
    const [height, width] = size.split('x').map(el => Number(el));

    if (isNaN(height) || isNaN(width)) {
        return null;
    }

    if (height <= 0 || width <= 0) {
        return null;
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