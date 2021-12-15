import { Component } from "react";

class NavHead extends Component {
    render() {
        return (
            <li onClick={e => this.props.changeCategory(e.target.value)} value={this.props.id} className="nav-head-link">{this.props.text}</li>
        )
    }
}

export default NavHead