import React, { Component } from 'react';
import "../../sass/main.scss"

class BackButton extends Component {
    static contextTypes = {
        router: () => true,
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