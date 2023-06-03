import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Boot from "./Boot"
import HexOS from "./Hex"
import Testcard from "./Testcard"

const App = props => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Boot/>} />
                <Route path="/os" element={<HexOS/>} />
                <Route path="/testcard" element={<Testcard/>} />
            </Routes>
            
        </div>
    );
};

App.propTypes = {
    
};

export default App;