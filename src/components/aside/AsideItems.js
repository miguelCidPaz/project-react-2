import React from "react";

class AsideItem extends React.Component {
    render() {
        return <div className="asideItem">
            <h3>{`OFRECIDO POR ${this.props.element.author !== null ? this.props.element.author : "Anonimo"}`}</h3>
            <div className="asideItemBody"><img alt='img' src={this.props.element.urlToImage} />
                <p>{this.props.element.title}</p></div>
        </div>
    }
}
export default AsideItem
