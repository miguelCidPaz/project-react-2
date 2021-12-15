import { Component } from 'react';
import './style.css';

class ContentPartners extends Component {

    render() {
        const arr = Object.values(this.props.partners)
        return (
            <div className="navbar-content-links">
                <nav className="menu-link-partner">
                    <div className="label-partner-container">
                        <p className="label-partners">Partners: </p>
                    </div>
                    {arr.map((element, index) => {
                        return <div key={index} className={`link-partner ${element.color}`}>
                            <li value={index} onClick={e => this.props.changeNews(e.target.value)}>{element.partner}</li>
                        </div>
                    })}
                </nav>
            </div>
        )
    }
}

export default ContentPartners