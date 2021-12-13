import { Component } from "react";
import ContentPartners from "./ContentPartners";
import NavBarNews from "./NavBarNews";
import NavBarTrends from "./NavBarTrends";

class NavBar extends Component {
    render() {
        return (
            <div className="principal-navbar-content">
                <ContentPartners partners={this.props.partners} />
                <NavBarNews news={this.props.news} />
                <NavBarTrends searchCategory={this.props.changeCategory} trends={this.props.trends} />
            </div>
        )
    }
}

export default NavBar