import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import NavBar from './components/navbar/NavBar';
import { dataBase } from './Data';
import { data } from './components/aside/assets/asideItems';
import Aside from './components/aside/Aside';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Videos from './components/videosBar/Videos';
import axios from 'axios';
import { APIKEY } from './key';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            category: "technology"
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
    }

    async componentDidMount() {
        this.fetchMoreData()
    }

    async fetchMoreData() {
        const resp = await axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.category}&apiKey=` + APIKEY)
        this.setState((prevState) => ({
            news: { ...resp.data.articles }
        }))
    }

    changeCategory(value) {

        switch (value) {

            case 0:
                this.setState(() => ({
                    category: "business"
                }))
                break;

            case 1:
                this.setState(() => ({
                    category: "entertainment"
                }))
                break;

            case 2:
                this.setState(() => ({
                    category: "general"
                }))
                break;

            case 3:
                this.setState(() => ({
                    category: "health"
                }))
                break;

            case 4:
                this.setState(() => ({
                    category: "science"
                }))
                break;

            case 5:
                this.setState(() => ({
                    category: "sports"
                }))
                break;

            case 6:
                this.setState(() => ({
                    category: "technology"
                }))
                break;

            default:
                this.setState(() => ({
                    category: "technology"
                }))
        }

        this.fetchMoreData();
    }

    render() {
        return (
            <div className="main-content-column">
                <Header mainButtons={dataBase.mainButtons} navHead={dataBase.navHeader} socialButtons={dataBase.socialButtons} iconsTop={dataBase.iconsTop} />
                <Banner ad={dataBase.banners} />
                <NavBar changeCategory={this.changeCategory} partners={dataBase.partners} news={dataBase.fastNews} trends={dataBase.trending} />
                <div className="main-content">
                    <ListNews news={this.state.news} ad={dataBase.banners} selectionBar={dataBase.selectionBar} basicBar={dataBase.basicBar} />
                    <Aside data={data} />
                </div>

                <Videos data={dataBase.videosBar} />
                <Footer data={dataBase.footer} />
            </div>
        )
    }
}

export default App