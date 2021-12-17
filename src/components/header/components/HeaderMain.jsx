import { Component } from "react";
import '../style.css';
import ButtonMain from "./ButtonMain";
import MainLogo from "./MainLogo";

/**
 * This class will collect 3 components, 2 buttonsmain and the mainLogo of Engadget
 */
class HeaderMain extends Component {
    render() {
        const buttons = Object.values({ ...this.props.mainButtons });
        return (
            <div className="content-main">
                <ButtonMain buttonType={buttons[0]} />
                <MainLogo />
                <ButtonMain buttonType={buttons[1]} />
            </div>
        )
    }
}

export default HeaderMain