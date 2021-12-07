import React from "react";

class AsideItem extends React.Component {
    render() {
        console.log(this.props);
        return <div className="asideItem">
            <h3>{`OFRECIDO POR ${this.props.element.tittle}`}</h3>
            <img alt ='img' src={this.props.element.img}/>
            <p>{this.props.element.text}</p>
            </div>
        }
}
export default AsideItem
