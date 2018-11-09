import React, { Component } from 'react';
import "../../sass/main.scss"

class BackButton extends Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
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