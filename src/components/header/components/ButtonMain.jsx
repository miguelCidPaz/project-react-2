import { Component } from "react";

/**
 * Este componente sera un boton reutilizable al que iremos cambiando tanto la clase
 * como el texto que contiene, de esta forma podremos reutilizarlo las veces necesarias y 
 * si se necesitase podriamos incluir hasta una funcion personalizada para cada uno.
 * 
 * Recibira la prop de buttontype que contendra el tipo(la clase) y el texto(la forma segun la fuente css)
 */
class ButtonMain extends Component {
    render() {
        return (
            <div className="container-button">
                <div className={this.props.buttonType.type}>
                    <p className="label-button">{this.props.buttonType.text}</p>
                </div>
            </div>
        )
    }
}

export default ButtonMain