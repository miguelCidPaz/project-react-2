import { Component } from "react";
import CardNew from './CardNew';
import './styles.css';

class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.news
        }
    }

    render() {
        const arr = Object.values(this.state);
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