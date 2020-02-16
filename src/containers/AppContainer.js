import React, {Component} from 'react';

import App from "../components/App/App";


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '8x8'
        }
    }

    render() {
        const {size} = this.state;

        return (
            <App
                size={size}
                handleChange={this.handleChange}
            />
        )
    }

    handleChange = (event) => {
        this.setState({
            size: event.target.value
        });
    }
}

export default AppContainer;