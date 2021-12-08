import { Component } from "react";
import HeaderTop from "./components/HeaderTop";
import ButtonMain from './components/ButtonMain';
import HeaderMain from "./components/HeaderMain";
import NavHead from './components/NavHead';
import './style.css'

class Header extends Component {
    render() {
        const arr = Object.values(this.props.socialButtons);
        return (
            <div className="header-content">
                <HeaderTop />
                <HeaderMain mainButtons={this.props.mainButtons} />
                <div className="sub-header">
                    <div className="container-nav-head">
                        {this.props.navHead.map((element, index) => {
                            return <NavHead key={index} text={element} />
                        })}
                        {arr.map((element, index) => {
                            return <ButtonMain key={index} buttonType={element} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header