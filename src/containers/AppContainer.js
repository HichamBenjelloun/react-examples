import React, {Component, createRef} from 'react';

import Grid from "../components/Grid/Grid";

import 'tachyons';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.sizeInput = createRef();
        this.state = {
            size: '3x3',
        }
    }

    render() {
        const {size} = this.state;

        return (
            <div className="App">
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label>
                        <span role="img" aria-label="checkerboard">🏁</span>
                        <span>Checkerboard size :</span>
                        <input
                            type="text"
                            placeholder="Up to 100x100"
                            ref={this.sizeInput}
                        />
                    </label>
                    <input type="submit" value="update"/>
                </form>
                <Grid size={size}/>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            size: this.sizeInput.current.value,
        });
    }
}

export default AppContainer;