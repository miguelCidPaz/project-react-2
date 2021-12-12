import { Component } from "react";
import './styles.css'

class CardNew extends Component {
    render() {
        const photoDefault = "https://image.shutterstock.com/image-illustration/male-default-avatar-profile-gray-260nw-582509281.jpg";
        return (
            <div className="body-card">
                <div className="card-text">
                    <p className="description-card-text">{this.props.new.title}</p>
                    <p className="categoria-card-text">{this.props.new.author}</p>
                    <p className="cuerpo-card-text">{this.props.new.description}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                    <p className="footer-card-text"><button className="comments-card-text">💬</button>{this.props.new.footer}</p>
                </div>

                <div className="card-img">
                    <img src={this.props.new.urlToImage !== null ? this.props.new.urlToImage : photoDefault} alt="#" />
                </div>
            </div>
        )
    }
}

export default CardNew