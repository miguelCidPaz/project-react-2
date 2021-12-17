import React from 'react';
import './styles.css';

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeSelection = this.handleChangeSelection.bind(this);
    }

     handleChangeSelection(e) {
        let category= "technology";
        let value = e.target.id;
        console.log(e.target.id);
        value = parseInt(value.slice(0,-12));
        console.log(value);
        switch (value) {
            case 0:
                category ="best movil";break;
            case 1:
                category ="buy a movil";break;                    
            case 2:
                category = "movil sales"; break;
            case 3:
                category ="movil teams";break;   
            case 4:
                category ="experts opinion";break;   
            case 5:
                category ="sports";break;   
            case 6:
                category ="technology";break;   
            default:
                category ="technology";   
        }
        console.log(category);
        this.props.changeSelection(category);
    };
    render() {

        const links = Object.values(this.props.controls.nav.fields);
        const items = Object.values(this.props.news);

        return (

            <div className={`middleBars ${this.props.clase}`}>
                <div className="links-list">
                    <h4>{this.props.controls.nav.title}</h4>
                    <div className="links">
                        {links.map((element, index) => {
                            return <p key={index} id ={index+'selectionBar'} onClick={this.handleChangeSelection}>{element}</p>
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