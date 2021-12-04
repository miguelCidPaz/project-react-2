import { Component } from "react";
import CardNew from './CardNew';
import './styles.css';

class ListNews extends Component {

    render() {
        const arr = Object.values(this.props.news);
        return (
            <div className="main-content">
                <div className="main-list">
                    {arr.map((element, index) => {
                        return <CardNew key={index} new={element} />
                    })}
                </div>
            </div>
        )
    }
}

export default ListNews