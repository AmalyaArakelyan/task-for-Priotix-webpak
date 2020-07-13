import React from 'react';
import PropTypes from "prop-types";


export default function Error(props) {
    const {error} = props
    return (
        error?
        <div className={`error error-${error.type}`}>
            {error.message}
        </div>
        :null
    );
}

Error.propTypes = {
    error: PropTypes.object
};
