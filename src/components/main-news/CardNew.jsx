import { Component } from "react";
import './styles.css'

class CardNew extends Component {
    render() {
        return (
            <div className="body-card">
                <div className="card-text">
                    <p className="description-card-text">{this.props.new.description}</p>
                    <p className="categoria-card-text">{this.props.new.category}</p>
                    <p className="cuerpo-card-text">{this.props.new.body}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                    <p className="footer-card-text"><button className="comments-card-text">💬</button>{this.props.new.footer}</p>
                </div>

                <div className="card-img">
                    <img src={this.props.new.image} alt="#" />
                </div>
            </div>
        )
    }
}

export default CardNew