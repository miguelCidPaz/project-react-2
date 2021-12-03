import { Component } from "react";
import CardNew from './CardNew';
import './styles.css';

class ListNews extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="main-list">
                    <CardNew />
                </div>
            </div>
        )
    }
}

export default ListNews