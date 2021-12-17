import { Component } from "react";
import '../style.css';

/**
 * Simplemente contiene el logo, pero por si se necesitaba usar en algun otro sitio
 * decidi aislarlo en una etiqueta a parte.
 */
class MainLogo extends Component {
    render() {
        return (
            <div className="container-logo">
                <img src="https://img.weblogssl.com/css/xataka/p/skin-site-xataka-d/images/head-brand-logo.svg?v=134" alt="" />
            </div>
        )
    }
}

export default MainLogo