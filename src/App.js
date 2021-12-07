import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import { dataBase } from './Data';
import { data } from './assets/asideItems.js';
import Aside from './Aside';

class App extends Component {
    render() {
        return (<>
            <ListNews news={dataBase.ItemList} />
            <Aside data ={data}/>
            </>
        )
    }
}

export default App