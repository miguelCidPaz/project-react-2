import { Component } from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import './style.css'

class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <HeaderTop />
                <HeaderMain mainButtons={this.props.mainButtons} />
                <div className="sub-header">

                </div>
            </div>
        )
    }
}

export default Header