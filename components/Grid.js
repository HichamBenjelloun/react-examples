'use strict';

import React from 'react';
import SquareRow from './SquareRow';

class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let [height, width] = this.props.size.split('x');

        let squareNodes = height != undefined && width != undefined ?
            Array.apply(0, new Array(Number(height))).map(
                (element, key) => <SquareRow key={key}
                                             index={key}
                                             width={width} />
            ) : null;

        return (
            <div className="Grid">
                {squareNodes}
            </div>
        );
    }

}

export default Grid;