import React from 'react';
import './styles.css';

class Bar extends React.Component {
    render() {

        const links = Object.values(this.props.data.nav.fields);
        const items = Object.values(this.props.data.items);

        return (
            
        <div className={`middleBars ${this.props.data.class}`}>
            <div className="links-list">
                <h4>{this.props.data.nav.tittle}</h4>
                <div className="links">
                    {links.map((element,index) => {
                        return <p key={index}>{element}</p>
                    })}                   
                </div>
                <h5>{this.props.data.nav.foot}</h5>
            </div>
            <div className="item-list">
                {items.map((element, index) => {
                    return <div key={index}><img src={element.img} alt={element.alt}/><p>{element.text}</p></div>
                })}
            </div>
        </div>            
        )
    }
}
export default Bar