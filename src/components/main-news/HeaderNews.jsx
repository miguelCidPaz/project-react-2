import { Component } from "react";

class HeaderNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minimize: false
        }
        this.minimize = this.minimize.bind(this)
    }

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
                <div className={this.state.minimize ? "body-card-minimize" : "body-card-header"}>
                    <div onClick={this.minimize} className="control"><p>{this.state.minimize ? "+" : "-"}</p></div>
                    {this.state.minimize ? <p className="pseudo-description">{this.props.new.title}</p> : <><div className="card-img-header">
                        <img src={this.props.new.urlToImage !== null ? this.props.new.urlToImage : photoDefault} alt="#" id="top-anchor" />
                    </div><div className="card-text-header">
                            <p className="description-card-text-header">{this.props.new.title}</p>
                            <p className="categoria-card-text-header">{this.props.new.author !== null ? this.props.new.author : "Anon"}</p>
                            <p className="cuerpo-card-text-header">{this.props.new.description}<button className="read-more">Leer Mas &gt;&gt;</button></p>
                            <p className="footer-card-text-header"><button className="comments-card-text">💬</button>{this.props.new.footer}</p>
                        </div></>}

                </div>
            </>
        )
    }
}

export default HeaderNews