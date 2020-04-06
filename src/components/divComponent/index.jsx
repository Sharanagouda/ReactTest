import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class DivComponent extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="foo">
                Bar
            </div>
        );
    }
}

DivComponent.propTypes = propTypes;
DivComponent.defaultProps = defaultProps;

export default DivComponent;