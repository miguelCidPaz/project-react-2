import { Component } from "react";

/**
 * This tag is responsible for returning an integer value according to its position to the central App container, 
 * in this way we avoid depending on the html that could be editable from outside, 
 * we will only treat the id that we receive by prop.
 */
class NavHead extends Component {
    render() {
        return (
            <li onClick={e => this.props.changeCategory(e.target.value)} value={this.props.id} className="nav-head-link">{this.props.text}</li>
        )
    }
}

export default NavHead