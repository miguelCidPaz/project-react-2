import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import NavBar from './components/navbar/NavBar';
import { dataBase } from './Data';

class App extends Component {
    render() {
        return (
            <div className="main-content-column">
                <NavBar partners={dataBase.partners} />
                <div className="main-content">
                    <ListNews news={dataBase.ItemList} />
                </div>
            </div>
        )
    }
}

export default App