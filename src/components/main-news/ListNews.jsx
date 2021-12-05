import { Component } from "react";
import CardNew from './CardNew';
import HeaderNews from './HeaderNews';
import './styles.css';

class ListNews extends Component {

    render() {
        const arr = Object.values(this.props.news);
        return (
            <div className="main-list">
                {arr.map((element, index) => {
                    if (index === 0) {
                        return <HeaderNews key={index} new={element} />
                    } else {
                        return <CardNew key={index} new={element} />
                    }

                })}
            </div>
        )
    }
}

export default ListNews