import { Component } from 'react';
import './style.css';

/**
 * Component that will show the news brought from the search in the father
 */
class NavBarNews extends Component {
    render() {
        const arr = Object.values(this.props.news)
        const clases = ["first-new", "second-new", "three-new"]
        return (
            <div className="navbar-content">
                <div className="fastnews-content">

                    {arr.map((element, index) => {
                        if (index < 3) {
                            return <div key={index} className={`fastnew-frame ${clases[index]}`}>
                                <a href={element.url} target="_blank" rel="noreferrer"><img className="img-new" src={element.urlToImage} alt="#" /></a>
                                <p>{element.title}</p>
                            </div>
                        } else {
                            return null
                        }
                    })}

                </div>
            </div>
        )
    }
}

export default NavBarNews