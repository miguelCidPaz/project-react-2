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
            items: {},
            length: 10
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
    }

    fetchMoreData() {
        let dataActual = Object.values(this.state.items)
        let datafresh = Object.values(this.props.news);
        const dataComplete = dataActual.concat(datafresh)

        this.setState((prev) => ({
            items: { ...dataComplete },
            length: prev.length + 10
        }))
    }

    async componentDidMount() {
        await this.setState(() => ({
            items: { ...this.props.news }
        }))
    }

    componentDidUpdate(prevProps) {
        if (this.props.news !== prevProps.news) {
            this.setState(() => ({
                items: { ...this.props.news }
            }))
        }
    }

    render() {
        const arr = Object.values(this.state.items);
        let count = 0; let barCount = 0;
        return (
            <div className="main-list">

                <InfiniteScroll
                    className="infinite"
                    dataLength={this.state.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.length < 20 ? true : false}
                    loader={<h4>Loading...</h4>}
                    pullDownToRefreshThreshold={90}
                >
                    {arr.map((element, index) => {
                        count++;
                        barCount++;
                        if (count === 5) {
                            count = 0;
                            return <div key={"div" + index}><Banner key={"ad" + index} ad={this.props.ad} /><CardNew key={index} new={element} /></div>

                        }

                        if (barCount === 4) {
                            return <div className="space" key={index + "bar"}><Bar data={this.props.selectionBar} /> </div>
                        } else if (barCount === 13) {
                            return <div className="space" key={index + "bar"}> <Bar data={this.props.basicBar} /> </div>
                        }

                        if (index === 0) {
                            return <HeaderNews key={index} new={element} />
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