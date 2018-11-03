import React, { Component } from "react";

class SubmitForm extends Component {

    render() {
        return (
            <div className="SubmitForm">
                <form>
                    <input type="text" ref='textInput' maxLength='1' />
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default SubmitForm;
