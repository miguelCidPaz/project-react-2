import { Component } from "react";
import CardNew from './CardNew';
import HeaderNews from './HeaderNews';
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.css';
import Banner from "../banner/Banner";
import Bar from '../midde-bars/Bar'

class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: { ...this.props.news },
            length: 10
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
    }

    fetchMoreData() {

        let dataload = Object.values(this.state.items)
        let datafresh = Object.values(this.props.news);
        let dataComplete = dataload.concat(datafresh);

        this.setState((prev) => ({
            items: { ...dataComplete },
            length: prev.length + 10
        }))
    }

    //<Bar data={dataBase.selectionBar} />
    //<Bar data={dataBase.basicBar} />


    render() {
        const arr = Object.values(this.state.items);
        let count = 0; let barCount = 0;
        return (
            <div className="main-list">

                <InfiniteScroll
                    dataLength={this.state.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.length < 20 ? true : false}
                    loader={<h4>Loading...</h4>}
                >
                    {arr.map((element, index) => {
                        count++;
                        barCount++;
                        { console.log(barCount) }
                        if (count === 5) {
                            count = 0;
                            return <div><Banner key={index} ad={this.props.ad} /> </div>

                        }

                        if (barCount === 11) {
                            return <Bar data={this.props.selectionBar} />
                        } else if (barCount === 13) {
                            return <Bar data={this.props.basicBar} />
                        }

                        if (index === 0) {
                            return <div><HeaderNews key={index} new={element} /> </div>
                        } else {
                            return <CardNew key={index} new={element} />
                        }

                    })}
                </InfiniteScroll>

            </div>
        )
    }
}

export default ListNews