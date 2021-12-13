import React from 'react';
import './styles.css';

class Bar extends React.Component {
    render() {

        const links = Object.values(this.props.controls.nav.fields);
        const items = Object.values(this.props.news);

        return (

            <div className={`middleBars ${this.props.clase}`}>
                <div className="links-list">
                    <h4>{this.props.controls.nav.title}</h4>
                    <div className="links">
                        {links.map((element, index) => {
                            console.log(element)
                            return <p key={index}>{element}</p>
                        })}
                    </div>
                    <h5>{this.props.controls.nav.foot}</h5>
                </div>
                <div className="item-list">
                    {items.map((element, index) => {
                        if (index < 4) {
                            return <div key={index}><img src={element.urlToImage} alt="#" /><p>{element.title}</p></div>
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default Bar