import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import { dataBase } from './Data';

class App extends Component {
    render() {
        return (
            <ListNews news={dataBase.ItemList} />
        )
    }
}

export default App