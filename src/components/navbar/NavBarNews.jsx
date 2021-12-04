import { Component } from 'react';
import './style.css';

class NavBarNews extends Component {
    render() {
        const arr = Object.values(this.props.news)
        return (
            <div className="navbar-content">
                <div className="fastnews-content">

                    {arr.map((element, index) => {
                        return <div key={index} className={`fastnew-frame ${element.class}`}>
                            <img className="img-new" src={element.img} alt="#" />
                            <p>{element.description}</p>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default NavBarNews