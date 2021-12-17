import { Component } from "react";
import NewsChat from './NewsChat'
import './styles.css'

/**
  * Cardnew will receive an Object that will contain all the data of a certain news,
  * We will treat them to shape the news cards and we will add some small controls.
  *
  * This label can either be minimized or returned to its original size
  *
  * You can also display another window where we will have access to a chat that we will save individually
  * for each news.
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
     * We will receive the status of the chat and save it in saveChat as an array of objects.
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
     * Control the visibility status of the chat
     */
    openChat() {
        this.setState(() => ({
            visualChat: !this.state.visualChat
        }))
    }

    /**
     * It will control if the cardnew is minimized or not
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