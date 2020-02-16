import React from 'react';
import 'tachyons';

import Grid from '../Grid/Grid';

import './App.css';

const App = ({
                 size,
                 handleChange,
             }) => (
    <div className="App">
        <span>🏁 Checkerboard size :</span>
        <input
            placeholder="Up to 100x100"
            value={size}
            onChange={handleChange}/>
        <Grid size={size}/>
    </div>
);

export default App;
