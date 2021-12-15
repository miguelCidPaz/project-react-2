import { Component } from "react";
import ContentPartners from "./ContentPartners";
import NavBarNews from "./NavBarNews";
import NavBarTrends from "./NavBarTrends";
import { APIKEY } from '../../key'
import axios from 'axios'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fastNews: {},
            search: "bitcoin"
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
        this.changeNews = this.changeNews.bind(this)
    }

    componentDidMount() {
        this.fetchMoreData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.fetchMoreData();
        }
    }

    async fetchMoreData() {
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=` + APIKEY)
        this.setState((prevState) => ({
            fastNews: { ...resp.data.articles }
        }))
    }

    changeNews(value) {
        switch (value) {
            case 0:
                this.setState(() => ({
                    search: "innovation"
                }))
                break;
            case 1:
                this.setState(() => ({
                    search: "soccer"
                }))
                break;
            case 2:
                this.setState(() => ({
                    search: "e-sports"
                }))
                break;
            case 3:
                this.setState(() => ({
                    search: "planet"
                }))
                break;
            case 4:
                this.setState(() => ({
                    search: "games"
                }))
                break;
            case 5:
                this.setState(() => ({
                    search: "cars"
                }))
                break;
            case 6:
                this.setState(() => ({
                    search: "bitcoin"
                }))
                break;
            case 7:
                this.setState(() => ({
                    search: "books"
                }))
                break;
            default:
                this.setState(() => ({
                    search: "cars"
                }))
        }

        this.setState(() => ({
            fastNews: {}
        }))

    }


    render() {
        return (
            <div className="principal-navbar-content">
                <ContentPartners changeNews={this.changeNews} partners={this.props.partners} />
                <NavBarNews news={this.state.fastNews} />
                <NavBarTrends changeCategory={this.props.changeCategory} trends={this.props.trends} />
            </div>
        )
    }
}

export default NavBar