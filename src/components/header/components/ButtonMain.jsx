import { Component } from "react";

/**
 * You will receive the buttontype prop that will contain the type (the class) 
 * and the text (the shape according to the css source)
 */
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