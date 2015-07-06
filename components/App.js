'use strict';

import React from 'react';

import Grid from './Grid';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: '1x1'
        }
    }

    handleChange(event) {
        this.setState({
            size: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <input value={this.state.size}
                       onChange={this.handleChange.bind(this)} />
                <Grid size={this.state.size} />
            </div>
        );
    }
}

export default App;