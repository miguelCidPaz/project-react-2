import React, { Component } from "react";
import './styles.css';

class NewsChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{ id: 0, content: 'hola caracola' },],
            message: ''
        }
        this.myRef = React.createRef()
        this.addComment = this.addComment.bind(this)
    }

    addComment() {
        const comentarios = Object.values(this.state.comments)
        const mensaje = { id: comentarios.length, content: this.state.message }

        if (mensaje.content.length > 1 && mensaje.content.length < 50) {
            this.setState((prev) => ({
                comments: [...prev.comments, mensaje],
                message: ''
            }))
        } else {
            this.myRef.current.className = "error-input"
            setTimeout(() => {
                this.myRef.current.className = ""
            }, 1000);
        }

        this.myRef.current.value = ''
        this.myRef.current.focus()
    }

    render() {
        const arr = Object.values(this.state.comments)
        const img = 'https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png';
        return (
            <div className="window-chat">
                <button className="close-chat">X</button>
                <div className="chat">
                    {arr.length > 0 ? arr.map((element, index) => { return <div key={index} className='content-comment'><div className="frame"><img src={img} alt="user" /></div><p className="comment">{element.content}</p><button className="delete-comment">x</button></div> }) : null}
                </div>
                <div className="controls-chat">
                    <input onKeyUp={(e) => (e.keyCode === 13 ? this.addComment() : null)} ref={this.myRef} type="text" onChange={(e) => { this.setState(() => ({ message: e.target.value })) }} />
                    <button onClick={this.addComment} className="send">Enviar</button>
                </div>

            </div>
        )
    }
}

export default NewsChat