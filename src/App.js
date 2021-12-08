import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import NavBar from './components/navbar/NavBar';
import { dataBase } from './Data';
import { data } from './components/aside/assets/asideItems';
import Aside from './components/aside/Aside';
import Bar from './components/midde-bars/Bar';

class App extends Component {
    render() {
        return (
            <div className="main-content-column">
                <NavBar partners={dataBase.partners} news={dataBase.fastNews} trends={dataBase.trending} />
                <div className="main-content">
                    <ListNews news={dataBase.ItemList} />
                    <Aside data ={data}/>
                </div>
                <Bar data = {dataBase.selectionBar}/>
                <Bar data = {dataBase.basicBar}/>
            </div>
        )
    }
}

export default App