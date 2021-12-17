import { Component } from "react";
import '../style.css';
import ButtonMain from "./ButtonMain";
import MainLogo from "./MainLogo";

/**
 * Esta clase recogera 3 componentes, 2 buttonsmain y el mainLogo de Xataka
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