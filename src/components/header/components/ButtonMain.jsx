import { Component } from "react";

class ButtonMain extends Component {
    render() {
        return (
            <div className="container-button">
                <div className={this.props.buttonType.type}>
                    <p className="label-button">{this.props.buttonType.text}</p>
                </div>
            </div>
        )
    }
}

export default ButtonMain