import { Component } from "react";
import ButtonMain from './components/ButtonMain';
import HeaderMain from "./components/HeaderMain";
import NavHead from './components/NavHead';
import './style.css'

/**
 * Central component that will contain the rest of the components that will make up the header
 */
class Header extends Component {
    render() {
        //These two const are only a preliminary treatment to spread the data
        const arr = Object.values(this.props.socialButtons);
        const arrIcons = Object.values(this.props.iconsTop);
        return (
            <div className="header-content">
                <div className="content-buttons-top">
                    {arrIcons.map((element, index) => {
                        return <ButtonMain key={index} buttonType={element} />
                    })}
                </div>
                <HeaderMain mainButtons={this.props.mainButtons} />
                <div className="sub-header">
                    <div className="container-nav-head">
                        <ButtonMain buttonType={this.props.socialButtons[1]} />
                        {this.props.navHead.map((element, index) => {
                            return <NavHead id={index} changeCategory={this.props.changeCategory} key={index} text={element} />
                        })}
                    </div>
                    <div className="container-social-buttons">
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