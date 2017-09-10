"use strict";
require('./loader.css');
require('../../styles/fx/shadow.css');
const React = require('react');

const Loader = ({ isEnabled }) => {
    return (
        <div className={isEnabled ? "" : "d-none"}>
            <div className="spinner">
                <div className="spinner-bars">
                    <div className="spinner-bar spinner-bar1 shadow"></div>
                    <div className="spinner-bar spinner-bar2 shadow"></div>
                    <div className="spinner-bar spinner-bar3 shadow"></div>
                </div>
            </div>
            <div className="spinner">
                <div className="spinner-bars">
                    <div className="spinner-bar spinner-bar1"></div>
                    <div className="spinner-bar spinner-bar2"></div>
                    <div className="spinner-bar spinner-bar3"></div>
                </div>
            </div>
        </div>
    );
};

Loader.propTypes = {
    isEnabled: React.PropTypes.bool
};

Loader.defaultProps = {
    isEnabled: true
};

module.exports = Loader;