import { Component } from 'react';
import './style.css';

/**
 * Label that contains the animated menu that will control the central news of the navbar
 * It will receive the function from the parent component and it will return the value assigned to the label
 */
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