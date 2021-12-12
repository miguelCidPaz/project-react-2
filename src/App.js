import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import NavBar from './components/navbar/NavBar';
import { dataBase } from './Data';
import { data } from './components/aside/assets/asideItems';
import Aside from './components/aside/Aside';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import news from './Api';
import axios from 'axios';
import { APIKEY } from './key';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    async componentDidMount() {
        const resp = await axios.get('https://newsapi.org/v2/top-headlines?category=technology&apiKey=' + APIKEY)
        //this.setState({ ...resp.data.articles })
        this.setState((prevState) => ({
            news: { ...resp.data.articles }
        }))
        console.log(this.state)
    }

    render() {
        console.log(news());
        return (
            <div className="main-content-column">
                <Header mainButtons={dataBase.mainButtons} navHead={dataBase.navHeader} socialButtons={dataBase.socialButtons} iconsTop={dataBase.iconsTop} />
                <Banner ad={dataBase.banners} />
                <NavBar partners={dataBase.partners} news={dataBase.fastNews} trends={dataBase.trending} />
                <div className="main-content">
                    <ListNews news={this.state.news} ad={dataBase.banners} selectionBar={dataBase.selectionBar} basicBar={dataBase.basicBar} />
                    <Aside data={data} />
                </div>
                <Footer data={dataBase.footer} />
            </div>
        )
    }
}

export default App