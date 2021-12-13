import { Component } from "react";
import './styles.css'

class CardNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minimize: true
        }
        this.minimize = this.minimize.bind(this);
    }

    minimize() {
        const min = this.state.minimize
        console.log('es' + min)
        console.log('en' + !min)
        this.setState(() => ({
            minimize: !min
        }))
    }

    render() {
        const photoDefault = "https://image.shutterstock.com/image-illustration/male-default-avatar-profile-gray-260nw-582509281.jpg";
        return (
            <div className={this.state.minimize ? "body-card-minimize" : "body-card"}>
                <div onClick={this.minimize} className="control"><p>{this.state.minimize ? "+" : "-"}</p></div>
                {this.state.minimize ? <p className="pseudo-description">{this.props.new.title}</p> : <><div className="card-text">
                    <p className="description-card-text">{this.props.new.title}</p>
                    <p className="categoria-card-text">{this.props.new.author !== null ? this.props.new.author : "Anon"}</p>
                    <p className="cuerpo-card-text">{this.props.new.description}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                    <p className="footer-card-text"><button className="comments-card-text">💬</button>{this.props.new.footer}</p>
                </div><div className="card-img">
                        <img src={this.props.new.urlToImage !== null ? this.props.new.urlToImage : photoDefault} alt="#" />
                    </div></>}
            </div>
        )
    }
}

export default CardNew