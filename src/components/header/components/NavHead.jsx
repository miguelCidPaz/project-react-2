import { Component } from "react";

class NavHead extends Component {
    render() {
        return (
            <p className="nav-head-link">{this.props.text}</p>
        )
    }
}

export default NavHead