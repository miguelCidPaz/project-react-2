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
            category: "technology",
            userCategory: "Tecnologia"
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
                    category: "business",
                    userCategory: "Empresa"
                }))
                break;

            case 1:
                this.setState(() => ({
                    category: "entertainment",
                    userCategory: "Entretenimiento"
                }))
                break;

            case 2:
                this.setState(() => ({
                    category: "general",
                    userCategory: "General"
                }))
                break;

            case 3:
                this.setState(() => ({
                    category: "health",
                    userCategory: "Salud"
                }))
                break;

            case 4:
                this.setState(() => ({
                    category: "science",
                    userCategory: "Ciencia"
                }))
                break;

            case 5:
                this.setState(() => ({
                    category: "sports",
                    userCategory: "Deportes"
                }))
                break;

            case 6:
                this.setState(() => ({
                    category: "technology",
                    userCategory: "Tecnologia"
                }))
                break;

            default:
                this.setState(() => ({
                    category: "technology",
                    userCategory: "Tecnologia"
                }))
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.category !== prevState.category) {
            this.fetchMoreData();
        }
    }

    render() {
        return (
            <div className="main-content-column">
                <Header mainButtons={dataBase.mainButtons} navHead={dataBase.navHeader} socialButtons={dataBase.socialButtons} iconsTop={dataBase.iconsTop} />
                <Banner ad={dataBase.banners} />
                <NavBar changeCategory={this.changeCategory} partners={dataBase.partners} news={this.state.news} trends={dataBase.trending} />
                <div className="main-content">
                    <ListNews category={this.state.userCategory} news={this.state.news} ad={dataBase.banners} selectionBar={dataBase.selectionBar} basicBar={dataBase.basicBar} />
                    <Aside data={this.state.news} />
                </div>

                <Videos data={dataBase.videosBar} />
                <Footer data={dataBase.footer} />
            </div>
        )
    }
}

export default App