import { Component } from "react";
import NewsChat from './NewsChat'
import './styles.css'

/**
 * Cardnew recibira un Object que contendra todos los datos de una determinada noticia,
 * Los trateremos para dar forma a las tarjetas de noticia y agregaremos unos pequeños controles.
 * 
 * Esta etiqueta podra tanto minimizarse como devolverse a su tamaño original
 * 
 * Ademas podra desplegar otra ventana donde tendremos acceso a un chat que guardaremos individualmente
 * por cada noticia.
 */
class CardNew extends Component {
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
                {this.state.visualChat ? <NewsChat saveChat={this.saveDataChat} openChat={this.openChat} notice={this.props.new.title} content={this.state.saveChat} /> : null}
                <div className={this.state.minimize ? "body-card-minimize" : "body-card"}>
                    <div onClick={this.minimize} className="control"><p>{this.state.minimize ? "+" : "-"}</p></div>
                    {this.state.minimize ? <p className="pseudo-description">{this.props.new.title}</p> : <><div className="card-text">
                        <p className="description-card-text">{this.props.new.title}</p>
                        <p className="categoria-card-text">{this.props.category}</p>
                        <p className="cuerpo-card-text">{this.props.new.description}<a href={this.props.new.url} target="_blank" rel="noreferrer" className="read-more">Leer Mas &gt;&gt;</a></p>
                        <p className="footer-card-text"><button onClick={this.openChat} className="comments-card-text">💬</button>{this.props.new.footer}{this.state.saveChat.length}</p>
                    </div><div className="card-img">
                            <img src={this.props.new.urlToImage !== null ? this.props.new.urlToImage : photoDefault} alt="#" />
                        </div></>}
                </div>
            </>
        )
    }
}

export default CardNew