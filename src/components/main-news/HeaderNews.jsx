import { Component } from "react";
import NewsChat from "./NewsChat";

/**
 * HeaderNews tendra exactamente las mismas funcionalidades que CardNew, pero para evitar el JSX de 
 * las card se enfangase aun mas se decidio por una pequeña separacion, pero podria optimizarse para evitarla
 * 
 * Control de minimizado
 * 
 * Ventana de chat con memoria segun el estado del padre
 */
class HeaderNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minimize: false,
            visualChat: false,
            saveChat: []
        }
        this.minimize = this.minimize.bind(this);
        this.openChat = this.openChat.bind(this);
        this.saveDataChat = this.saveDataChat.bind(this);
    }

    /**
     * Recibiremos el estado del chat y lo guardaremos en saveChat en forma
     * de array de objetos.
     * 
     * @param {Object} dataChat 
     */
    saveDataChat(dataChat) {
        console.log(dataChat)
        this.setState(() => ({
            saveChat: Object.values(dataChat)
        }))
    }

    /**
     * Controlara el estado de visibilidad del chat
     */
    openChat() {
        this.setState(() => ({
            visualChat: !this.state.visualChat
        }))
    }

    /**
     * Controlara si la cardnew se encuentra o no minimizada
     */
    minimize() {
        const min = this.state.minimize
        this.setState(() => ({
            minimize: !min
        }))
    }


    render() {
        const photoDefault = "https://image.shutterstock.com/image-illustration/male-default-avatar-profile-gray-260nw-582509281.jpg";
        return (
            <>
                <div className="last-new-label"><p>Lo ultimo</p></div>
                {this.state.visualChat ? <NewsChat saveChat={this.saveDataChat} openChat={this.openChat} notice={this.props.new.title} content={this.state.saveChat} /> : null}
                <div className={this.state.minimize ? "body-card-minimize" : "body-card-header"}>
                    <div onClick={this.minimize} className="control"><p>{this.state.minimize ? "+" : "-"}</p></div>
                    {this.state.minimize ? <p className="pseudo-description">{this.props.new.title}</p> : <><div className="card-img-header">
                        <img src={this.props.new.urlToImage !== null ? this.props.new.urlToImage : photoDefault} alt="#" id="top-anchor" />
                    </div><div className="card-text-header">
                            <p className="description-card-text-header">{this.props.new.title}</p>
                            <p className="categoria-card-text-header">{this.props.category}</p>
                            <p className="cuerpo-card-text-header">{this.props.new.description}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                            <p className="footer-card-text-header"><button onClick={this.openChat} className="comments-card-text">💬</button>{this.props.new.footer}{this.state.saveChat.length}</p>
                        </div></>}

                </div>
            </>
        )
    }
}

export default HeaderNews