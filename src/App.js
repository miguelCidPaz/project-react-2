import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import NavBar from './components/navbar/NavBar';
import { dataBase } from './Data';
import Aside from './components/aside/Aside';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Videos from './components/videosBar/Videos';
import axios from 'axios';
import { APIKEY } from './key';

/**
 * Parte central para visualizar cada componente
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            newsSelection: [1],
            category: "technology",
            userCategory: "Tecnologia"
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
        this.fetchOtherSelection = this.fetchOtherSelection.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
    }

    /**
     * Montaje asincrono del data central
     */
    componentDidMount() {
        this.fetchMoreData()
    }


    async fetchMoreData() {
        const resp = await axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.category}&apiKey=` + APIKEY)
        this.setState((prevState) => ({
            news: { ...resp.data.articles },
            newsSelection: { ...resp.data.articles }
        }))
    }

    /**
     * Esta funcion realizara una llamada para devolver a las middlebars las noticias solicitadas usando el parametro q de la api
     * 
     * @param {*} category String a buscar en la Api
     */
    async fetchOtherSelection(category) {
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=` + APIKEY)
        this.setState((prevState) => ({
            newsSelection: { ...resp.data.articles }
        }))
    }

    /**
     * Mediante un switch decidiremos que categorias usar en la busqueda de las noticias centrales
     * 
     * @param {*} value valor entero recibido
     */
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
                    category: "health",
                    userCategory: "Salud"
                }))
                break;

            case 3:
                this.setState(() => ({
                    category: "science",
                    userCategory: "Ciencia"
                }))
                break;

            case 4:
                this.setState(() => ({
                    category: "sports",
                    userCategory: "Deportes"
                }))
                break;

            case 5:
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

    /**
     * De esta forma le decimos al componente que cuando el estado cambia debe realizar la busqueda, asi evitamos
     * problemas de sincronia
     * 
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        if (this.state.category !== prevState.category) {
            this.fetchMoreData();
        }
    }

    render() {
        return (
            <div className="main-content-column">
                <Header changeCategory={this.changeCategory} mainButtons={dataBase.mainButtons} navHead={dataBase.navHeader} socialButtons={dataBase.socialButtons} iconsTop={dataBase.iconsTop} />
                <Banner ad={dataBase.banners} />
                <NavBar changeCategory={this.changeCategory} partners={dataBase.partners} news={this.state.news} trends={dataBase.trending} />
                <div className="main-content">
                    <ListNews category={this.state.userCategory} news={this.state.news} ad={dataBase.banners} changeSelection={this.fetchOtherSelection} newsSelection={this.state.newsSelection} selectionBar={dataBase.selectionBar} basicBar={dataBase.basicBar} />
                    <Aside data={this.state.news} />
                </div>

                {<Videos data={dataBase.videosBar} />}
                <Footer data={dataBase.footer} />
            </div>
        )
    }
}

export default App