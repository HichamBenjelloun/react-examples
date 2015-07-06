'use strict';

import React from 'react';
import Square from './Square';

class SquareRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let width = this.props.width;

        var squareNodes = Array.apply(0, new Array(Number(width))).map(
            (element, key) => <Square key={key}
                                      parentIndex={this.props.index}
                                      index={key} />
        );

        return (
            <div className="Grid">
                {squareNodes}
            </div>
        );
    }

}

export default SquareRow;