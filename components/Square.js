'use strict';

import React from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let [backgroundColor, color] =
            (this.props.parentIndex + this.props.index) % 2 == 0 ?
                ['black', 'white'] :
                ['white', 'black'];

        let divStyle = {
            backgroundColor: backgroundColor,
            color: color,
            display: 'inline-block',
            width: '50px',
            height: '50px',
            border: '1px solid black',
            margin: '1px'
        };

        return (
            <div style={divStyle}>
                {this.props.parentIndex}, {this.props.index}
            </div>
        );
    }

}

export default Square;