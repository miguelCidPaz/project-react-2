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
        this.setState(() => ({
            items: { ...this.props.news }
        }))
    }

    async componentDidUpdate(prevProps) {
        if (this.props.news !== prevProps.news) {
            this.setState(() => ({
                items: { ...this.props.news },
                length: 10
            }))
        }
    }

    render() {
        const arr = Object.values(this.state.items);
        const selection = 'selectionBar';
        const basic = 'basicBar';
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
                            return <div key={"div" + index}><Banner key={"ad" + index} ad={this.props.ad} /><CardNew category={this.props.category} key={index} new={element} /></div>

                        }

                        if (barCount === 4) {
                            return <div className="space" key={index + "bar"}><Bar type='selection' changeSelection={this.props.changeSelection} controls={this.props.selectionBar} news={this.props.newsSelection} clase={selection} /> </div>
                        } else if (barCount === 13) {
                            return <div className="space" key={index + "bar"}> <Bar type='basics' changeBasics={this.props.changeBasics} controls={this.props.basicBar} news={this.props.newsBasics} clase={basic} /> </div>
                        }

                        if (index === 0) {
                            return <HeaderNews category={this.props.category} key={index} new={element} />
                        } else {
                            return <CardNew category={this.props.category} key={index} new={element} />
                        }

                    })}
                </InfiniteScroll>

            </div>
        )
    }
}

export default ListNews