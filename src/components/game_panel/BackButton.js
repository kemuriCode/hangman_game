import React, { Component } from 'react';
import "../../sass/main.scss"
import PropTypes from 'prop-types';

class BackButton extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <button className="btn btn-primary btn-lg"
                    onClick={this.context.router.history.goBack}> Back
            </button>
        )
    }
}

export default BackButton;