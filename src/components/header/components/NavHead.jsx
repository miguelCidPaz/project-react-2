import { Component } from "react";

/**
 * Esta etiqueta se encarga de devolver un valor entero segun su posicion al contenedor central App,
 * De esta forma evitamos depender del html que podria ser editable desde fuera, unicamente trataremos el id
 * que recibimos por prop.
 */
class NavHead extends Component {
    render() {
        return (
            <li onClick={e => this.props.changeCategory(e.target.value)} value={this.props.id} className="nav-head-link">{this.props.text}</li>
        )
    }
}

export default NavHead