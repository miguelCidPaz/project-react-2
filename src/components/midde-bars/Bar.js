import React from 'react';
import './styles.css';
/**Class for render middle sections xataka selection and xataka basics */
class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeSelection = this.handleChangeSelection.bind(this);
        this.handleChangeBasics = this.handleChangeBasics.bind(this);
    }

     handleChangeSelection(e) {
        let category= "best movil";
        let value = e.target.id;
        value = parseInt(value.slice(0,-12));
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
            default:
                category ="best movil";   
        }
        this.props.changeSelection(category);
    };
     handleChangeBasics(e) {
        let category= "whatsapp";
        let value = e.target.id;
        value = parseInt(value.slice(0,-9));
        switch (value) {
            case 0:
                category ="whatsapp";break;
            case 1:
                category ="instagram";break;                    
            case 2:
                category = "windows"; break;
            case 3:
                category ="android";break;   
            case 4:
                category ="social media";break;   
            default:
                category ="whatsapp";   
        }
        this.props.changeBasics(category);
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
                            if (this.props.type === 'selection') {
                                return <p key={index} id ={index+'selectionsBar'} onClick={this.handleChangeSelection}>{element}</p>
                            }
                            else {
                                return <p key={index} id ={index+'basicsBar'} onClick={this.handleChangeBasics}>{element}</p>
                            }
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