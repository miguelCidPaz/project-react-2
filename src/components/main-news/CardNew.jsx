import { Component } from "react";
import './styles.css'

class CardNew extends Component {
    render() {
        return (
            <div className="body-card">
                <div className="card-text">
                    <p className="description-card-text">El 'Infojobs del Gobierno' ya es oficial: esto es todo lo que sabemos de este nuevo portal de empleo estatal</p>
                    <p className="categoria-card-text">Empresas y Economia</p>
                    <p className="cuerpo-card-text">El Consejo de Ministros ha a aprobado este viernes el anteproyecto de ley que regulara este servicio. <button className="read-more">Leer Mas</button></p>
                    <p className="footer-card-text"><button className="comments-card-text">💬</button> - Pablo Rodriguez - Hace 39 Min</p>
                </div>

                <div className="card-img">
                    <img src="https://i.blogs.es/a2a76c/1366_2000-37-/500_333.jpg" alt="#" />
                </div>
            </div>
        )
    }
}

export default CardNew