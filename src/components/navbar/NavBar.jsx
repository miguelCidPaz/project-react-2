import { Component } from "react";
import ContentPartners from "./ContentPartners";

class NavBar extends Component {
    render() {
        return (
            <div className="principal-navbar-content">
                <ContentPartners partners={this.props.partners} />
                <div className="navbar-content"></div>
                <div className="trendings"></div>
            </div>
        )
    }
}

export default NavBar