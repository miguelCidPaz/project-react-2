import { Component } from "react";

class HeaderNews extends Component {
    render() {
        return (
            <>
                <div className="last-new-label"><p>Lo ultimo</p></div>
                <div className="body-card-header">
                    <div className="card-img-header">
                        <img src={this.props.new.image} alt="#" />
                    </div>
                    <div className="card-text-header">
                        <p className="description-card-text-header">{this.props.new.description}</p>
                        <p className="categoria-card-text-header">{this.props.new.category}</p>
                        <p className="cuerpo-card-text-header">{this.props.new.body}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                        <p className="footer-card-text-header"><button className="comments-card-text">💬</button>{this.props.new.footer}</p>
                    </div>

                </div>
            </>
        )
    }
}

export default HeaderNews